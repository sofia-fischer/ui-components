import { getAssetPath, h } from "@stencil/core";
import { ClickEvent } from "../click-event/clickEvent";
export class LvlMention {
    render() {
        this.mention = {
            backgroundColorGradientEnd: "#cccccc",
            backgroundColorGradientStart: "#1a2548",
            iconURL: "https://cdn.levels.one/uploads/images/squared/media/2019/04/30/f5dac1606b6d11e99cb24954302eff43.png",
            id: 44694,
            linkedID: 7571,
            object: "MentionResource",
            replaceWith: "@New Location Suggestions",
            string: "@addtolevels",
            textColor: "#dff5ff",
            type: "HASHTAG",
            suffixIcon: "guag",
            uuid: "2991f4f0-baee-11ea-abf8-8da229846497",
        };
        return h("span", { class: "mention", style: { 'background': 'linear-gradient(123deg, ' + this.mention.backgroundColorGradientStart + ', ' + this.mention.backgroundColorGradientEnd + ')', }, onClick: () => this.clickEvent.emit(new ClickEvent(this.mention.id, 'MENTION')) },
            h("img", { class: "icon", src: this.getPreixIconUrl() }),
            h("img", { class: "icon", src: this.mention.iconURL }),
            h("a", { class: "text", style: { 'color': this.mention.textColor, } }, this.mention.replaceWith),
            h("img", { class: "icon", src: this.getSuffixIconUrl() }));
    }
    getSuffixIconUrl() {
        if (this.mention.suffixIconURL) {
            return this.mention.suffixIconURL;
        }
        console.log(getAssetPath('assets/crown'));
        switch (this.mention.suffixIcon) {
            case "asterisk":
                return getAssetPath('assets/crown.svg');
            case "checkmark":
                return getAssetPath('assets/check-mark.png');
            case "contacts":
                return getAssetPath('assets/profiles.png');
            case "president":
                return getAssetPath('assets/crown.svg');
            case "board-member":
                return getAssetPath('assets/suit.svg');
        }
    }
    getPreixIconUrl() {
        if (this.mention.prefixIconURL) {
            return this.mention.prefixIconURL;
        }
        switch (this.mention.suffixIcon) {
            case "guag":
                return getAssetPath('assets/guag.png');
        }
    }
    static get is() { return "lvl-mention"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["lvl-mention.css"]
    }; }
    static get styleUrls() { return {
        "$": ["lvl-mention.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get properties() { return {
        "mention": {
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
            "attribute": "mention",
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
