import { h } from "@stencil/core";
import { ClickEvent } from "../click-event/clickEvent";
export class LvlListItem {
    render() {
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
        };
        return h("div", { class: "list-item", onClick: () => this.clickEvent.emit(new ClickEvent(this.user.id, 'LISTITEM')) },
            h("lvl-avatar", { class: "item-avatar", user: this.user }),
            h("div", { class: "item-center" },
                h("h1", { class: "item-title" }, this.getTitle()),
                h("h6", { class: "item-text" }, this.getText())));
    }
    getTitle() {
        if (!!this.user || this.user.deleted_at) {
            return 'Deleted User';
        }
        const possibleAttributes = [
            'name',
            'realname',
            'Realname',
            'realName',
            'nickname',
            'Login',
        ];
        const possibleAttribute = possibleAttributes.find(attribute => !!this.user[attribute]);
        if (possibleAttribute) {
            return this.user[possibleAttribute];
        }
        return 'Deleted User';
    }
    getText() {
        if (this.user && this.user.text) {
            return this.user.text;
        }
        return null;
    }
    static get is() { return "lvl-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["lvl-list-item.css"]
    }; }
    static get styleUrls() { return {
        "$": ["lvl-list-item.css"]
    }; }
    static get properties() { return {
        "user": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "user",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "clickEvent",
            "name": "clickEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "ClickEvent",
                "resolved": "ClickEvent",
                "references": {
                    "ClickEvent": {
                        "location": "import",
                        "path": "../click-event/clickEvent"
                    }
                }
            }
        }]; }
}
