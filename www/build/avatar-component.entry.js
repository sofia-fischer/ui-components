import { r as registerInstance, h } from './core-3a9857db.js';

const AvatarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.avatar = 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png';
        this.bottomRight = 'https://cdn.levels.one/resources/graphics/avatars/bright-hashtag-lg.180425T0000.png';
        this.bottomLeft = null;
    }
    render() {
        console.log(this.topRight, this.bottomRight, this.topLeft, this.bottomLeft, this.online);
        return h("div", { class: "avatar-container" }, h("img", { class: "avatar", src: this.avatar }), !this.topLeft ? null : h("img", { class: "icon top left", src: this.topLeft }), !this.topRight ? null : h("img", { class: "icon top right", src: this.topRight }), !this.bottomLeft ? null : h("img", { class: "icon bottom left", src: this.bottomLeft }), !this.bottomRight ? null : h("img", { class: "icon bottom right", src: this.bottomRight }), this.online ? h("div", { class: "icon top right online" }) : null);
    }
    static get style() { return ".avatar {\n    position:absolute;\n    height:100%; /* = 100% - 2*5% padding */\n    width:100%; /* = 100% - 2*5% padding */\n    border-radius: 50%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background-repeat: no-repeat;\n}\n\n.avatar-container {\n    float:left;\n    position: relative;\n    width: 100%;\n    padding-bottom : 100%; /* = width for a 1:1 aspect ratio */\n    margin:1.66%;\n    overflow:hidden;\n}\n\n.icon {\n    width: 25%;\n    height: 25%;\n    position: absolute;\n}\n\n.top {\n    top: 0px;;\n}\n\n.bottom {\n    bottom: 0px;\n}\n\n.left {\n    left: 0px;;\n}\n\n.right {\n    right: 0px;\n    float: right;\n}\n\n.online {\n    background-color: limegreen;\n    border-radius: 50%;\n}"; }
};

export { AvatarComponent as avatar_component };
