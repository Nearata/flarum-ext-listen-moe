import load from "external-load";
import FieldSet from "flarum/common/components/FieldSet";
import Select from "flarum/common/components/Select";
import { extend } from "flarum/common/extend";
import ForumApplication from "flarum/forum/ForumApplication";
import app from "flarum/forum/app";
import SettingsPage from "flarum/forum/components/SettingsPage";
import ReconnectingWebSocket from "reconnecting-websocket";

let resLoaded = false;
const addResources = async () => {
    if (resLoaded) {
        return;
    }

    await load.css(
        "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css"
    );
    await load.js(
        "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js"
    );

    resLoaded = true;
};

const radio = {
    jpop: {
        audioUrl: "https://listen.moe/stream",
        wsUrl: "wss://listen.moe/gateway_v2",
    },
    kpop: {
        audioUrl: "https://listen.moe/kpop/stream",
        wsUrl: "wss://listen.moe/kpop/gateway_v2",
    },
};

const getCover = (fileName) => {
    return `https://cdn.listen.moe/covers/${fileName}`;
};

const websocket = (audioUrl, wsUrl) => {
    let heartbeatInterval;

    const heartbeat = (interval) => {
        heartbeatInterval = setInterval(() => {
            app.listenMoe.websocket.send(JSON.stringify({ op: 9 }));
        }, interval);
    };

    app.listenMoe.websocket = new ReconnectingWebSocket(wsUrl, [], {
        connectionTimeout: 5000,
    });

    app.listenMoe.websocket.onopen = () => {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    };

    app.listenMoe.websocket.onmessage = (message) => {
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
            app.listenMoe.websocket.send(JSON.stringify({ op: 9 }));
            heartbeat(response.d.heartbeat);
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

            const artists = res.song.artists.map((e) => e.name).join(", ");
            const albums = res.song.albums;
            const cover =
                albums.length > 0 && albums[0].image !== null
                    ? getCover(albums[0].image)
                    : app.forum.attribute("blankUrl");
            const sources = res.song.sources
                .map((e) => e.nameRomaji)
                .join(", ");

            const songTitle = res.song.title;
            const artistsFinal = !!sources
                ? `${artists} [${sources}]`
                : artists;

            document.body
                .querySelector(".aplayer-title")
                .setAttribute("title", `${songTitle} ${artistsFinal}`);

            const reload = () => {
                app.listenMoe.player.list.add({
                    name: songTitle,
                    artist: artistsFinal,
                    url: audioUrl,
                    cover: cover,
                });

                app.listenMoe.player.list.switch(1);
                app.listenMoe.player.list.remove(0);
            };

            reload();

            app.listenMoe.player.on("pause", () => {
                // This way the seek is always synced with the API
                reload();
            });
        }
    };

    app.listenMoe.websocket.onclose = () => {
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    };
};

app.initializers.add("nearata-listen-moe", () => {
    app.listenMoe = {};

    extend(ForumApplication.prototype, "mount", function () {
        const allowGuests = app.forum.attribute("listenMoeRadioGuests");
        const user = app.session.user;

        if (!user && !allowGuests) {
            return;
        }

        const key = !!user
            ? user.preferences().listenMoeRadioType
            : app.forum.attribute("listenMoeRadioType");
        const audioUrl = radio[key]["audioUrl"];
        const wsUrl = radio[key]["wsUrl"];

        addResources().then(() => {
            const container = document.createElement("div");
            container.id = "nearata-listen-moe";

            document.body.prepend(container);

            app.listenMoe.player = new APlayer({
                container: container,
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

            websocket(audioUrl, wsUrl);
        });
    });

    extend(SettingsPage.prototype, "settingsItems", function (items) {
        const user = app.session.user;
        const currentRadio = user.preferences().listenMoeRadioType;

        items.add(
            "listenMoeRadioType",
            m(
                FieldSet,
                {
                    label: app.translator.trans(
                        "nearata-listen-moe.forum.settings.radio_label"
                    ),
                    class: "Settings-theme",
                },
                [
                    m(Select, {
                        class: "Settings-theme--input",
                        value: currentRadio,
                        options: {
                            jpop: app.translator.trans(
                                "nearata-listen-moe.forum.settings.radio_options.jpop"
                            ),
                            kpop: app.translator.trans(
                                "nearata-listen-moe.forum.settings.radio_options.kpop"
                            ),
                        },
                        onchange: (value) => {
                            user.savePreferences({
                                listenMoeRadioType: value,
                            }).then(() => location.reload());
                        },
                    }),
                ]
            )
        );
    });
});
