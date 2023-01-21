import WebsocketState from "../States/WebsocketState";
import load from "external-load";
import Component from "flarum/common/Component";
import app from "flarum/forum/app";
import type Mithril from "mithril";

let loaded = false;
const addResources = async () => {
    if (loaded) {
        return;
    }

    await load.css(
        "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css"
    );

    await load.js(
        "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js"
    );

    loaded = true;
};

export default class Player extends Component {
    radio: any;

    constructor() {
        super();

        this.radio = {
            jpop: {
                audioUrl: "https://listen.moe/stream",
                wsUrl: "wss://listen.moe/gateway_v2",
            },
            kpop: {
                audioUrl: "https://listen.moe/kpop/stream",
                wsUrl: "wss://listen.moe/kpop/gateway_v2",
            },
        };
    }

    oncreate(vnode: Mithril.VnodeDOM): void {
        super.oncreate(vnode);

        const allowGuests = app.forum.attribute("listenMoeRadioGuests");
        const user = app.session.user;

        if (!user && !allowGuests) {
            return;
        }

        const key: string = !!user
            ? user.preferences()!.listenMoeRadioType
            : app.forum.attribute("listenMoeRadioType");
        const audioUrl = this.radio[key]["audioUrl"];
        const wsUrl = this.radio[key]["wsUrl"];

        addResources().then(() => {
            const player = new APlayer({
                container: this.element,
                fixed: true,
                theme: "#FF015B",
                loop: "none",
                preload: "metadata",
                volume: 0.5,
                audio: {
                    name: "&nbsp;",
                    artist: "&nbsp;",
                    url: audioUrl,
                },
            });

            new WebsocketState(player, wsUrl);
        });
    }

    view(vnode: Mithril.VnodeDOM) {
        return <div id="nearata-listen-moe" />;
    }
}
