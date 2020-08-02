

## Avatar Component

The Avatar Component provides a basic mobile responsive Avatar, that uses the following properties: 

```bash
    @Prop() avatar: string = getAssetPath('assets/profiles.png');
    @Prop() topRight: string;
    @Prop() bottomRight: string = getAssetPath('assets/profiles.png');
    @Prop() bottomLeft: string = null;
    @Prop() topLeft: string;
    @Prop() online: boolean;
```

The Component is fully responsive. 
