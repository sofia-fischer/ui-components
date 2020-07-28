import { r as registerInstance, c as createEvent, h } from './core-3a9857db.js';
import { C as ClickEvent } from './clickEvent-f7110283.js';

const LvlListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickEvent = createEvent(this, "clickEvent", 7);
    }
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
        return h("div", { class: "list-item", onClick: () => this.clickEvent.emit(new ClickEvent(this.user.id, 'LISTITEM')) }, h("lvl-avatar", { class: "item-avatar", user: this.user }), h("div", { class: "item-center" }, h("h1", { class: "item-title" }, this.getTitle()), h("h6", { class: "item-text" }, this.getText())));
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
    static get style() { return ".list-item {\n    max-height: 100px;\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    max-height: 100px;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-pack: start;\n    justify-content: start;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.item-center {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -ms-flex-pack: start;\n    justify-content: start;\n    -ms-flex-align: baseline;\n    align-items: baseline;\n}\n\n.item-avatar {\n    max-height: 100px;\n    max-width: 100px;\n    height: 100%;\n    width: 100%;\n}\n\n.item-title {\n    font-family: \'Verdana\';\n    font-style: normal;\n    top: 50%;\n    margin: 5px;\n\n}\n\n\n.item-text {\n    color: darkgray;\n    font-family: \'Verdana\';\n    font-style: normal;\n    top: 50%;\n    padding-left: 20px;\n    margin: 5px;\n\n}"; }
};

export { LvlListItem as lvl_list_item };
