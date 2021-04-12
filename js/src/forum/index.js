import load from 'external-load';


let resLoaded = false;
const addResources = async () => {
    if (resLoaded) {
        return;
    }

    await load.css('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css');
    await load.js('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js');

    resLoaded = true;
};

app.initializers.add('nearata-listen-moe', app => {
    const listenMoeUrl = 'https://listen.moe/stream';

    const wsPromise = () => new Promise(resolve => {
        let heartbeatInterval;
        let ws;

        function heartbeat(interval) {
            heartbeatInterval = setInterval(() => {
                ws.send(JSON.stringify({ op: 9 }));
            }, interval);
        }

        ws = new WebSocket('wss://listen.moe/gateway_v2');

        ws.onopen = () => {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
        };

        ws.onmessage = message => {
            if (!message.data.length) {
                return;
            }

            let response;

            try {
                response = JSON.parse(message.data);
            } catch (error) {
                return;
            }

            switch (response.op) {
                case 0:
                    ws.send(JSON.stringify({ op: 9 }));
                    heartbeat(response.d.heartbeat);
                    break;
                case 1:
                    if (response.t !== 'TRACK_UPDATE' && response.t !== 'TRACK_UPDATE_REQUEST' && response.t !== 'QUEUE_UPDATE' && response.t !== 'NOTIFICATION') {
                        break;
                    }

                    const res = response.d;

                    console.log(res);

                    const artists = res.song.artists.map(e => e.name).join(', ');
                    const albums = res.song.albums;
                    const cover = albums.length > 0 && albums[0].image !== null ? `https://cdn.listen.moe/covers/${albums[0].image}` : 'https://listen.moe/_nuxt/img/blank-dark.cd1c044.png';

                    window.listenMoe.list.add({
                        name: res.song.title,
                        artist: artists,
                        url: listenMoeUrl,
                        cover: cover
                    });

                    window.listenMoe.list.switch(1);
                    window.listenMoe.list.remove(0);

                    break;
                default:
                    break;
            }
        };

        ws.onclose = () => {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;

            if (ws) {
                ws.close();
                ws = null;
            }

            setTimeout(() => connect(), 5000);
        };

        resolve();
    });

    addResources().then(() => {
        const container = document.createElement('div');
        container.id = 'nearata-listen-moe';

        document.body.prepend(container);

        wsPromise().then(() => {
            window.listenMoe = new APlayer({
                container: container,
                fixed: true,
                theme: '#FF015B',
                loop: 'none',
                preload: 'metadata',
                volume: 0.5,
                audio: {
                    name: '',
                    artist: '',
                    url: listenMoeUrl
                }
            });
        });
    });
});
