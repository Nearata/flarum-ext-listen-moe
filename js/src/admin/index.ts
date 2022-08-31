import app from "flarum/admin/app";

app.initializers.add("nearata-listen-moe", () => {
    app.extensionData
        .for("nearata-listen-moe")
        .registerSetting({
            setting: "nearata-listen-moe.admin.guests",
            label: app.translator.trans(
                "nearata-listen-moe.admin.settings.radio_guests"
            ),
            type: "boolean",
        })
        .registerSetting({
            setting: "nearata-listen-moe.admin.radio_type",
            label: app.translator.trans(
                "nearata-listen-moe.admin.settings.radio_label"
            ),
            type: "select",
            options: {
                jpop: app.translator.trans(
                    "nearata-listen-moe.admin.settings.radio_options.jpop"
                ),
                kpop: app.translator.trans(
                    "nearata-listen-moe.admin.settings.radio_options.kpop"
                ),
            },
            default: "jpop",
            help: app.translator.trans(
                "nearata-listen-moe.admin.settings.radio_help"
            ),
        });
});
