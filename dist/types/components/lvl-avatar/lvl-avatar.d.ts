import { EventEmitter } from '../../stencil.core';
import { ClickEvent } from "../click-event/clickEvent";
export declare class LvlAvatar {
    user: any;
    format: {
        name: string;
        icon: string;
        online: string;
        id: string;
        guidance: string;
    };
    clickEvent: EventEmitter<ClickEvent>;
    render(): any;
    private getAvatar;
    private getOnline;
    private getGuidance;
    private getIcon;
}
