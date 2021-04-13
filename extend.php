<?php

namespace Nearata\ListenMoe;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('listenMoeRadioGuests', 'nearata-listen-moe.admin.guests', 'boolval', false)
        ->serializeToForum('listenMoeRadioType', 'nearata-listen-moe.admin.radio_type', 'strval', 'jpop'),
    (new Extend\User())
        ->registerPreference('listenMoeRadioType', 'strval', 'jpop')
];
