import { r as registerInstance, c as createEvent, h, d as getAssetPath } from './core-3a9857db.js';
import { C as ClickEvent } from './clickEvent-f7110283.js';

const LvlMention = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickEvent = createEvent(this, "clickEvent", 7);
    }
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
        return h("span", { class: "mention", style: { 'background': 'linear-gradient(123deg, ' + this.mention.backgroundColorGradientStart + ', ' + this.mention.backgroundColorGradientEnd + ')', }, onClick: () => this.clickEvent.emit(new ClickEvent(this.mention.id, 'MENTION')) }, h("img", { class: "icon", src: this.getPreixIconUrl() }), h("img", { class: "icon", src: this.mention.iconURL }), h("a", { class: "text", style: { 'color': this.mention.textColor, } }, this.mention.replaceWith), h("img", { class: "icon", src: this.getSuffixIconUrl() }));
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
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ".mention {\n    border-radius: 3px;\n    text-decoration: none;\n    position: relative;\n    font-family: sans-serif;\n    font-weight: 100;\n    padding: 3px;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    width: -webkit-min-content;\n    width: -moz-min-content;\n    width: min-content;\n    max-width: 100%;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.icon {\n    max-width: 20px;\n    max-height: 20px;\n    display: inline-block;\n    padding: 0px 5px 0px 5px;\n}\n\n.icon:empty {\n    padding: 0px;\n}\n\n\n.text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: break-all;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-negative: 1;\n    flex-shrink: 1;\n    padding: 0px 5px 0px 5px;\n\n}"; }
};

export { LvlMention as lvl_mention };
