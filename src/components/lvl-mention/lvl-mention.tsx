import {Component, Event, EventEmitter, getAssetPath, h, Prop} from '@stencil/core'
import {ClickEvent} from "../click-event/clickEvent";

@Component({
    tag: 'lvl-mention',
    styleUrl: 'lvl-mention.css',
    shadow: true,
    assetsDirs: ['assets'],

})
export class LvlMention
{
    @Prop() mention: any

    @Event() clickEvent: EventEmitter<ClickEvent>

    render()
    {
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
        }

        return <span class="mention"
                     style={{'background': 'linear-gradient(123deg, ' + this.mention.backgroundColorGradientStart + ', ' + this.mention.backgroundColorGradientEnd + ')',}}
                     onClick={() => this.clickEvent.emit(new ClickEvent(this.mention.id, 'MENTION'))}>
            
            <img class="icon"
                 src={this.getPreixIconUrl()}/>
            
            <img class="icon"
                 src={this.mention.iconURL}/>
            
            <a class="text" style={{'color': this.mention.textColor,}}>
                {this.mention.replaceWith}
            </a>
            
            <img class="icon" src={this.getSuffixIconUrl()}/>
        </span>
    }

    private getSuffixIconUrl()
    {
        if (this.mention.suffixIconURL) {
            return this.mention.suffixIconURL
        }
        console.log(getAssetPath('assets/crown'))

        switch (this.mention.suffixIcon) {
            case "asterisk":
                return getAssetPath('assets/crown.svg')
            case "checkmark":
                return getAssetPath('assets/check-mark.png')
            case "contacts":
                return getAssetPath('assets/profiles.png')
            case "president":
                return getAssetPath('assets/crown.svg')
            case "board-member":
                return getAssetPath('assets/suit.svg')
        }
    }

    private getPreixIconUrl()
    {
        if (this.mention.prefixIconURL) {
            return this.mention.prefixIconURL
        }

        switch (this.mention.suffixIcon) {
            case "guag":
                return getAssetPath('assets/guag.png')
        }
    }
}
