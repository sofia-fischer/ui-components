import { getAssetPath, h } from "@stencil/core";
import { ClickEvent } from "../click-event/clickEvent";
export class LvlAvatar {
    render() {
        console.log(this.user);
        return h("avatar-component", { avatar: this.getAvatar(), bottomRight: this.getIcon(), topLeft: this.getGuidance(), online: this.getOnline(), onClick: () => this.onClick.emit(new ClickEvent(this.user.id, 'AVATAR')) });
    }
    getAvatar() {
        if (!this.user) {
            return getAssetPath('assets/profiles.png');
        }
        const possibleAttributes = [
            'avatarImageURLThumb',
            'avatarImageUrlThumb',
            'profileImageUrl',
            'imageUrl',
            'avatarUrl',
        ];
        possibleAttributes.find(attribute => !!this.user[attribute]);
        if (possibleAttributes) {
            return getAssetPath('assets/profiles.png');
        }
        return 'Deleted User';
    }
    getOnline() {
        if (!this.user)
            return false;
        return !!this.user.online;
    }
    getGuidance() {
        if (!this.user)
            return false;
        return this.user.icon;
    }
    getIcon() {
        if (!this.user) {
            return getAssetPath('assets/profiles.png');
        }
        const possibleAttributes = [
            'iconUrl',
            'avatarIconURL',
            'profileIconUrl',
            'profileBadgeImageUrl',
            'profileBadgeUrl',
        ];
        const possibleAttribute = possibleAttributes.find(attribute => !!this.user[attribute]);
        if (possibleAttribute) {
            return this.user[possibleAttribute];
        }
        return null;
    }
    static get is() { return "lvl-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["lvl-avatar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["lvl-avatar.css"]
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
            "method": "onClick",
            "name": "onClick",
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
