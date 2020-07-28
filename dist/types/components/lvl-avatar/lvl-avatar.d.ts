import { EventEmitter } from '../../stencil.core';
import { ClickEvent } from "../click-event/clickEvent";
export declare class LvlAvatar {
    user: any;
    onClick: EventEmitter<ClickEvent>;
    render(): any;
    private getAvatar;
    private getOnline;
    private getGuidance;
    private getIcon;
}
