import { extend } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import Select from 'flarum/common/components/Select';
import ForumApplication from 'flarum/forum/ForumApplication';
import SettingsPage from 'flarum/forum/components/SettingsPage';

import load from 'external-load';
import ReconnectingWebSocket from 'reconnecting-websocket';


let resLoaded = false;
const addResources = async () => {
    if (resLoaded) {
        return;
    }

    await load.css('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css');
    await load.js('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js');

    resLoaded = true;
};

const radio = {
    'jpop': {
        'audioUrl': 'https://listen.moe/stream',
        'wsUrl': 'wss://listen.moe/gateway_v2'
    },
    'kpop': {
        'audioUrl': 'https://listen.moe/kpop/stream',
        'wsUrl': 'wss://listen.moe/kpop/gateway_v2'
    }
}

const getCover = fileName => {
    return `https://cdn.listen.moe/covers/${fileName}`;
};

const getBlankCover = () => {
    const baseUrl = app.forum.attribute('baseUrl');
    return `${baseUrl}/assets/extensions/nearata-listen-moe/blank-dark.png`;
};

const websocket = (audioUrl, wsUrl) => {
    return new Promise(resolve => {
        let heartbeatInterval;

        const heartbeat = interval => {
            heartbeatInterval = setInterval(() => {
                ws.send(JSON.stringify({ op: 9 }));
            }, interval);
        }

        const ws = new ReconnectingWebSocket(wsUrl, [], { connectionTimeout: 5000 });

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

            if (response.op === 0) {
                ws.send(JSON.stringify({ op: 9 }));
                heartbeat(response.d.heartbeat);
            }

            if (response.op === 1) {
                const valids = ['TRACK_UPDATE', 'TRACK_UPDATE_REQUEST', 'QUEUE_UPDATE', 'NOTIFICATION'];

                if (valids.indexOf(response.t) === -1) {
                    return;
                }

                const res = response.d;

                const artists = res.song.artists.map(e => e.name).join(', ');
                const albums = res.song.albums;
                const cover = albums.length > 0 && albums[0].image !== null ? getCover(albums[0].image) : getBlankCover();
                const sources = res.song.sources.map(e => e.nameRomaji).join(', ');

                const songTitle = res.song.title;
                const artistsFinal = !!sources ? `${artists} [${sources}]` : artists;

                document.body.querySelector('.aplayer-title').setAttribute('title', `${songTitle} ${artistsFinal}`);

                const reload = () => {
                    window.listenMoe.list.add({
                        name: songTitle,
                        artist: artistsFinal,
                        url: audioUrl,
                        cover: cover
                    });

                    window.listenMoe.list.switch(1);
                    window.listenMoe.list.remove(0);
                };

                reload();

                window.listenMoe.on('pause', () => {
                    // This way the seek is always synced with the API
                    reload();
                });
            }
        };

        ws.onclose = () => {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
        };

        return resolve(ws);
    });
};

app.initializers.add('nearata-listen-moe', app => {
    extend(ForumApplication.prototype, 'mount', function () {
        const allowGuests = app.forum.attribute('listenMoeRadioGuests');
        const user = app.session.user;

        if (!user && !allowGuests) {
            return;
        }

        const key = !!user ? user.preferences().listenMoeRadioType : app.forum.attribute('listenMoeRadioType');
        const audioUrl = radio[key]['audioUrl'];
        const wsUrl = radio[key]['wsUrl'];

        addResources().then(() => {
            const container = document.createElement('div');
            container.id = 'nearata-listen-moe';

            document.body.prepend(container);

            websocket(audioUrl, wsUrl).then(() => {
                window.listenMoe = new APlayer({
                    container: container,
                    fixed: true,
                    theme: '#FF015B',
                    loop: 'none',
                    preload: 'metadata',
                    volume: 0.5,
                    audio: {
                        name: '&nbsp;',
                        artist: '&nbsp;',
                        url: audioUrl
                    }
                });
            });
        });
    });

    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        const user = app.session.user;
        const currentRadio = user.preferences().listenMoeRadioType;

        items.add(
            'listenMoeRadioType',
            m(FieldSet, {
                label: app.translator.trans('nearata-listen-moe.forum.settings.radio_label'),
                class: 'Settings-theme'
            }, [
                m(Select, {
                    class: 'Settings-theme--input',
                    value: currentRadio,
                    options: {
                        'jpop': app.translator.trans('nearata-listen-moe.forum.settings.radio_options.jpop'),
                        'kpop': app.translator.trans('nearata-listen-moe.forum.settings.radio_options.kpop')
                    },
                    onchange: value => {
                        user.savePreferences({
                            listenMoeRadioType: value
                        }).then(() => location.reload());
                    }
                })
            ])
        );
    });
});
