import {Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'lvl-avatar',
    styleUrl: 'lvl-avatar.css',
    shadow: true
})
export class LvlAvatar
{
    @Prop() user: any

    render()
    {
        console.log(this.user)
        return <avatar-component
            avatar={this.getAvatar()}
            bottomRight={this.getIcon()}
            topLeft={this.getGuidance()}
            online={this.getOnline()}
        ></avatar-component>;
    }

    private getAvatar()
    {
        if (!this.user) {
            return 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png'
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
            return 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png'
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
            return 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png'
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
