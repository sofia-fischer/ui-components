import { EventEmitter } from '../../stencil.core';
import { ClickEvent } from "../click-event/clickEvent";
export declare class LvlListItem {
    user: any;
    onClick: EventEmitter<ClickEvent>;
    render(): any;
    private getTitle;
    private getText;
}
