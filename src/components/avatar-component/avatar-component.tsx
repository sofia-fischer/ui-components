import {Component, getAssetPath, h, Prop} from '@stencil/core';

@Component({
    tag: 'avatar-component',
    styleUrl: 'avatar-component.css',
    shadow: true
})
export class AvatarComponent
{
    @Prop() avatar: string = getAssetPath('assets/profiles.png');
    @Prop() topRight: string;
    @Prop() bottomRight: string = getAssetPath('assets/profiles.png');
    @Prop() bottomLeft: string = null;
    @Prop() topLeft: string;
    @Prop() online: boolean;

    render()
    {
        console.log(this.topRight, this.bottomRight, this.topLeft, this.bottomLeft, this.online)
        return <div class="avatar-container">
            <img class="avatar" src={this.avatar}/>

            {!this.topLeft ? null : <img class="icon top left" src={this.topLeft}/>}
            {!this.topRight ? null : <img class="icon top right" src={this.topRight}/>}
            {!this.bottomLeft ? null : <img class="icon bottom left" src={this.bottomLeft}/>}
            {!this.bottomRight ? null : <img class="icon bottom right" src={this.bottomRight}/>}

            {this.online ? <div class="icon top right online"></div> : null}
        </div>;
    }

}
