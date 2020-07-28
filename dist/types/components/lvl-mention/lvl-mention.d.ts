import { EventEmitter } from '../../stencil.core';
import { ClickEvent } from "../click-event/clickEvent";
export declare class LvlMention {
    mention: any;
    clickEvent: EventEmitter<ClickEvent>;
    render(): any;
    private getSuffixIconUrl;
    private getPreixIconUrl;
}
