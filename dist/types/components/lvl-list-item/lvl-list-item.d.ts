import { EventEmitter } from '../../stencil.core';
import { ClickEvent } from "../click-event/clickEvent";
export declare class LvlListItem {
    user: any;
    clickEvent: EventEmitter<ClickEvent>;
    render(): any;
    private getTitle;
    private getText;
}
