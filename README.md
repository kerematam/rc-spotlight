# react-lightbox-wrapper

> It is wrapper to give lightbox effect to the react components.

[![NPM](https://img.shields.io/npm/v/react-lightbox-wrapper.svg)](https://www.npmjs.com/package/react-lightbox-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-lightbox-wrapper
```

## Demo

![Image description](docs/images/showcase.gif)

## Usage

```jsx
import React, { Component } from "react";

import LightboxWrapper from "react-lightbox-wrapper";

class Example extends Component {
  render() {
    return (
      <LightboxWrapper isActive renderOnShadow={<h1>This is shadow view</h1>}>
        <div>Content with Lightbox Effect</div>
      </LightboxWrapper>
    );
  }
}
```

## Properties

| Property       | Description                                                                | Type         | Default                           |
| -------------- | -------------------------------------------------------------------------- | ------------ | --------------------------------- |
| isActive       | Weather the component is enabled or disabled.                              | Boolean      | false                             |
| renderOnShadow | Component(s) to be rendered over shadow.                                   | ReactNode(s) | null                              |
| shadowZIndex   | Z index of shadow. It will override the css class style with inline style. | Number       | null (css class style: "1000")    |
| shadowColor    | Color of shadow. It will override the css class style with inline style.   | String       | null (css class style: "#000000") |
| shadowOpacity  | Opacity of shadow. It will override the css class style with inline style  | Number       | null (css class style: 0.7)       |

## License

MIT © [kerematam](https://github.com/kerematam)
