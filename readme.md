
### UI Component Starter

This is a package containing three four User Interface Elements designed in the context of an Interdisciplinary Project on the Technical University of Munich in cooperation with LEVELS GmbH & CoKG. 

The UI Elements are designed to be used in the [LEVELS Web Page] (https://levels.one)

Therefor the default actions and design elements are following the LEVELS Style Guides, but sure can be individualised easily. 

## Components

⋅⋅* [Avatar Component] (avatar-component/readme.md)
⋅⋅* [LEVELS Avatar Component] (lvl-avatar/readme.md)
⋅⋅* [LEVELS List Item] (lvl-list-item/readme.md)
⋅⋅* [LEVELS Mention] (lvl-mention/readme.md)

# What is Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Using this component

The Component renders to four different Components that can be used as native html tags. 

```bash
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>Stencil Component Starter</title>

    <script type="module" src="/build/ui-components.esm.js"></script>
    <script nomodule src="/build/ui-components.js"></script>

</head>
<body>

<lvl-mention></lvl-mention>

</body>
</html>
```

