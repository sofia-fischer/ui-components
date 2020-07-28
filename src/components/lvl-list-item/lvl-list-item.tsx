import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';
import {ClickEvent} from "../click-event/clickEvent";

@Component({
    tag: 'lvl-list-item',
    styleUrl: 'lvl-list-item.css',
    shadow: true
})
export class LvlListItem
{
    @Prop() user: any

    @Event() clickEvent: EventEmitter<ClickEvent>

    render()
    {
        this.user = {
            avatarIconURL: "https://cdn.dev.levels.one/resources/graphics/levels/small/METHUSALEM.180425T0000.png",
            avatarImageURL: "https://cdn.dev.levels.one/resources/graphics/locations/types/avatars/restaurant.180425T0000.png",
            followersCount: 1,
            headline: "Locations",
            id: 17004,
            linkedID: 7105,
            name: "Sofia Restaurant Toronto",
            nickname: "#SofiaRestaurantToronto",
            object: "SearchResultResource",
            object_mode: "NEW_RESOURCE",
            type: "LOCATION",
            uuid: "b8e6ce20-3679-11ea-94ec-0d977511155a",
            online: true,
            text: 'You are doing great!'
        }

        return <div class="list-item"
                    onClick={() => this.clickEvent.emit(new ClickEvent(this.user.id, 'LISTITEM'))}>
            <lvl-avatar class="item-avatar" user={this.user}></lvl-avatar>
            <div class="item-center">
                <h1 class="item-title">{this.getTitle()}</h1>
                <h6 class="item-text">{this.getText()}</h6>
            </div>
        </div>;
    }

    private getTitle()
    {
        if (!!this.user || this.user.deleted_at) {
            return 'Deleted User'
        }

        const possibleAttributes =
            [
                'name',
                'realname',
                'Realname',
                'realName',
                'nickname',
                'Login',
            ]

        const possibleAttribute = possibleAttributes.find(attribute => !!this.user[attribute])

        if (possibleAttribute) {
            return this.user[possibleAttribute]
        }

        return 'Deleted User'
    }

    private getText()
    {
        if (this.user && this.user.text) {
            return this.user.text
        }

        return null
    }
}
