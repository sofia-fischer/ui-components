import { h } from "@stencil/core";
export class AvatarComponent {
    constructor() {
        this.avatar = 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png';
        this.bottomRight = 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png';
        this.bottomLeft = null;
    }
    render() {
        console.log(this.topRight, this.bottomRight, this.topLeft, this.bottomLeft, this.online);
        return h("div", { class: "avatar-container" },
            h("img", { class: "avatar", src: this.avatar }),
            !this.topLeft ? null : h("img", { class: "icon top left", src: this.topLeft }),
            !this.topRight ? null : h("img", { class: "icon top right", src: this.topRight }),
            !this.bottomLeft ? null : h("img", { class: "icon bottom left", src: this.bottomLeft }),
            !this.bottomRight ? null : h("img", { class: "icon bottom right", src: this.bottomRight }),
            this.online ? h("div", { class: "icon top right online" }) : null);
    }
    static get is() { return "avatar-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["avatar-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["avatar-component.css"]
    }; }
    static get properties() { return {
        "avatar": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "avatar",
            "reflect": false,
            "defaultValue": "'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png'"
        },
        "topRight": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "top-right",
            "reflect": false
        },
        "bottomRight": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "bottom-right",
            "reflect": false,
            "defaultValue": "'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png'"
        },
        "bottomLeft": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "bottom-left",
            "reflect": false,
            "defaultValue": "null"
        },
        "topLeft": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "top-left",
            "reflect": false
        },
        "online": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "online",
            "reflect": false
        }
    }; }
}
