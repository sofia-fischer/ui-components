import { r as registerInstance, c as createEvent, h, d as getAssetPath } from './core-3a9857db.js';
import { C as ClickEvent } from './clickEvent-f7110283.js';

const LvlAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClick = createEvent(this, "onClick", 7);
    }
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
    static get style() { return ".avatar {\n    position:absolute;\n    height:100%; /* = 100% - 2*5% padding */\n    width:100%; /* = 100% - 2*5% padding */\n    border-radius: 50%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background-repeat: no-repeat;\n}\n\n.avatar-container {\n    float:left;\n    position: relative;\n    width: 100%;\n    padding-bottom : 100%; /* = width for a 1:1 aspect ratio */\n    margin:1.66%;\n    overflow:hidden;\n}\n\n.icon {\n    width: 25%;\n    height: 25%;\n    position: absolute;\n}\n\n.top {\n    top: 0px;;\n}\n\n.bottom {\n    bottom: 0px;\n}\n\n.left {\n    left: 0px;;\n}\n\n.right {\n    right: 0px;\n    float: right;\n}\n\n.online {\n    background-color: limegreen;\n    border-radius: 50%;\n}"; }
};

export { LvlAvatar as lvl_avatar };
