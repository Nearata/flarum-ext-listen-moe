import app from "flarum/forum/app";
import ReconnectingWebSocket, {
    CloseEvent,
    ErrorEvent,
    Event,
} from "reconnecting-websocket";

type State = {
    connected: boolean;
    message: string | null;
};

export default class WebsocketState {
    player: any;
    heartbeatInterval: NodeJS.Timer | null;
    socket: ReconnectingWebSocket;
    state: State;

    constructor(player: any, url: string) {
        this.player = player;

        this.heartbeatInterval = null;
        this.socket = new ReconnectingWebSocket(url, [], {
            connectionTimeout: 5000,
        });
        this.state = {
            connected: false,
            message: null,
        };
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onError.bind(this);
    }

    onOpen(event: Event) {
        clearInterval(this.heartbeatInterval!);

        this.heartbeatInterval = null;
        this.state.connected = true;

        m.redraw();
    }

    onMessage(event: MessageEvent<any>) {
        if (!event.data.length) {
            return;
        }

        this.state.message = event.data;

        let response;

        try {
            response = JSON.parse(event.data);
        } catch (error) {}

        if (response.op === 0) {
            this.sendMessage(JSON.stringify({ op: 9 }));
            this.setHeartbeatInterval(response.d.heartbeat);
        }

        if (response.op === 1) {
            const valids = [
                "TRACK_UPDATE",
                "TRACK_UPDATE_REQUEST",
                "QUEUE_UPDATE",
                "NOTIFICATION",
            ];

            if (valids.indexOf(response.t) === -1) {
                return;
            }

            const res = response.d;

            const artists = res.song.artists.map((e: any) => e.name).join(", ");
            const albums = res.song.albums;
            const cover =
                albums.length > 0 && albums[0].image !== null
                    ? this.getCover(albums[0].image)
                    : app.forum.attribute("listenMoeBlankUrl");
            const sources = res.song.sources
                .map((e: any) => e.nameRomaji)
                .join(", ");

            const songTitle = res.song.title;
            const artistsFinal = !!sources
                ? `${artists} [${sources}]`
                : artists;

            const reload = () => {
                this.player.list.add({
                    name: songTitle,
                    artist: artistsFinal,
                    url: this.player.audio.src,
                    cover: cover,
                });

                this.player.list.switch(1);
                this.player.list.remove(0);
            };

            reload();

            this.player.on("pause", () => {
                // This way the seek is always synced with the API
                reload();
            });
        }

        m.redraw();
    }

    onClose(event: CloseEvent) {
        clearInterval(this.heartbeatInterval!);

        this.heartbeatInterval = null;
        this.state.connected = false;

        m.redraw();
    }

    onError(event: ErrorEvent) {
        console.log("[nearata-listen-mow] WebSocket error:", event);
    }

    sendMessage(message: any) {
        this.socket.send(message);
    }

    close() {
        this.socket.close();
    }

    setHeartbeatInterval(interval: number) {
        this.heartbeatInterval = setInterval(() => {
            this.sendMessage(JSON.stringify({ op: 9 }));
        }, interval);
    }

    getCover(fileName: string): string {
        return `https://cdn.listen.moe/covers/${fileName}`;
    }
}
