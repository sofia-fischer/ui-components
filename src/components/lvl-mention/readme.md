## LEVELS Mention Component

The LEVELS Mention Component provides a basic Mention or Tag, that uses the following properties: 

```bash
    @Prop() mention: any

    @Event() clickEvent: EventEmitter<ClickEvent>
```

The Component was precisly designed to fit the requirements of LEVELS, including the preset Icons. 

The Idea of a Mention is to have an object that can be used in any text element to give a clickable link to an other profile of the same platform, but does not look like the usual link. 
It has customisable colors and icons to describe the users relation to the current context, or his or her role in the network. 

An example mention object could be: 

```bash
    {
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
```
