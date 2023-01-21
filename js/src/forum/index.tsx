import Player from "./components/Player";
import FieldSet from "flarum/common/components/FieldSet";
import Select from "flarum/common/components/Select";
import { extend } from "flarum/common/extend";
import ForumApplication from "flarum/forum/ForumApplication";
import app from "flarum/forum/app";
import SettingsPage from "flarum/forum/components/SettingsPage";

app.initializers.add("nearata-listen-moe", () => {
    extend(ForumApplication.prototype, "mount", function () {
        const element = document.createElement("div");

        document.body.append(element);

        m.mount(element, Player);
    });

    extend(SettingsPage.prototype, "settingsItems", function (items) {
        const user = app.session.user;

        if (!user) {
            return;
        }

        const currentRadio = user.preferences()!.listenMoeRadioType;

        const options = {
            jpop: app.translator.trans(
                "nearata-listen-moe.forum.settings.radio_options.jpop"
            ),
            kpop: app.translator.trans(
                "nearata-listen-moe.forum.settings.radio_options.kpop"
            ),
        };

        items.add(
            "listenMoeRadioType",
            <FieldSet
                class="Settings-theme"
                label={app.translator.trans(
                    "nearata-listen-moe.forum.settings.radio_label"
                )}
            >
                <Select
                    class="Settings-theme--input"
                    value={currentRadio}
                    options={options}
                    onchange={(value: string) => {
                        user.savePreferences({
                            listenMoeRadioType: value,
                        }).then(() => location.reload());
                    }}
                />
            </FieldSet>
        );
    });
});
