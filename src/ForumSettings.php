<?php

namespace Nearata\ListenMoe;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer, $model, array $attributes): array
    {
        $attributes['blankUrl'] = $serializer->getAssetUrl('extensions/nearata-listen-moe/blank-dark.png');
        $attributes['listenMoeRadioGuests'] = (bool) $this->settings->get('nearata-listen-moe.admin.guests');
        $attributes['listenMoeRadioType'] = (string) $this->settings->get('nearata-listen-moe.admin.radio_type');

        return $attributes;
    }
}
