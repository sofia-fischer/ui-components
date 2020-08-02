## LEVELS List Item Component

The LEVELS List Item Component provides a basic mobile responsive Avatar, that uses the following properties: 

```bash
    @Prop() user: any
    @Prop() format: { 
        name: string, 
        text: string,
        icon: string, 
        online: string, 
        id: string, 
        guidance: string 
        }
        
    @Event() clickEvent: EventEmitter<ClickEvent>
```

The Component is fully responsive. The format Property gives the option to customize the properties used to identify the corresponding properties of the input user, including the requirements for the avatar. 

# Dependencies

This Component requires the Avatar component as well as Moment JS to respond in timestamped click events. 
