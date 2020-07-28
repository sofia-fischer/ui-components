import {Component, Event, EventEmitter, getAssetPath, h, Prop} from '@stencil/core';
import {ClickEvent} from "../click-event/clickEvent";

@Component({
    tag: 'lvl-avatar',
    styleUrl: 'lvl-avatar.css',
    shadow: true
})
export class LvlAvatar
{
    @Prop() user: any
    @Event() onClick: EventEmitter<ClickEvent>

    render()
    {
        console.log(this.user)
        return <avatar-component
            avatar={this.getAvatar()}
            bottomRight={this.getIcon()}
            topLeft={this.getGuidance()}
            online={this.getOnline()}
            onClick={() => this.onClick.emit(new ClickEvent(this.user.id, 'AVATAR'))}
        ></avatar-component>;
    }

    private getAvatar()
    {
        if (!this.user) {
            return getAssetPath('assets/profiles.png')
        }

        const possibleAttributes =
            [
                'avatarImageURLThumb',
                'avatarImageUrlThumb',
                'profileImageUrl',
                'imageUrl',
                'avatarUrl',
            ]

        possibleAttributes.find(attribute => !!this.user[attribute])

        if (possibleAttributes) {
            return getAssetPath('assets/profiles.png')
        }

        return 'Deleted User'
    }

    private getOnline()
    {
        if (!this.user) return false

        return !!this.user.online
    }

    private getGuidance()
    {
        if (!this.user) return false

        return this.user.icon
    }

    private getIcon()
    {
        if (!this.user) {
            return getAssetPath('assets/profiles.png')
        }

        const possibleAttributes =
            [
                'iconUrl',
                'avatarIconURL',
                'profileIconUrl',
                'profileBadgeImageUrl',
                'profileBadgeUrl',
            ]

        const possibleAttribute = possibleAttributes.find(attribute => !!this.user[attribute])

        if (possibleAttribute) {
            return this.user[possibleAttribute]
        }

        return null
    }
}
