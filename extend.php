<?php

namespace Nearata\ListenMoe;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\User())
        ->registerPreference('listenMoeRadioType', 'strval', 'jpop'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumSettings::class)
];
