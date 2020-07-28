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
    @Prop() format: { name: string, icon: string, online: string, id: string, guidance: string }

    @Event() clickEvent: EventEmitter<ClickEvent>

    render()
    {
        console.log(this.user)
        return <avatar-component
            avatar={this.getAvatar()}
            bottomRight={this.getIcon()}
            topLeft={this.getGuidance()}
            online={this.getOnline()}
            onClick={() => this.clickEvent.emit(new ClickEvent(this.user.id, 'AVATAR'))}
        ></avatar-component>;
    }

    private getAvatar()
    {
        if (!this.user) {
            return getAssetPath('assets/profiles.png')
        }

        if (this.format) {
            return this.user[this.format.name]
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

        if (this.format) {
            return this.user[this.format.online]
        }

        return !!this.user.online
    }

    private getGuidance()
    {
        if (!this.user) return false

        if (this.format) {
            return this.user[this.format.guidance]
        }

        return this.user.icon
    }

    private getIcon()
    {
        if (!this.user) {
            return getAssetPath('assets/profiles.png')
        }

        if (this.format) {
            return this.user[this.format.icon]
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
