# react-lightbox-wrapper

> Spotlight component simply highlights the component(s) that it wraps.

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

import Spotlight from "rc-spotlight";

class Example extends Component {
  render() {
    return (
      <Spotlight isActive renderOnBackdrop={<h1>This is backdrop view</h1>}>
        <div>Content with Lightbox Effect</div>
      </Spotlight>
    );
  }
}
```

## Properties

| Property       | Description                                                                | Type         | Default                           |
| -------------- | -------------------------------------------------------------------------- | ------------ | --------------------------------- |
| isActive       | Weather the component is enabled or disabled.                              | Boolean      | false                             |
| renderOnBackdrop | Component(s) to be rendered over backdrop.                                   | ReactNode(s) | null                              |
| backdropZIndex   | Z index of backdrop. It will override the css class style with inline style. | Number       | null (css class style: "1000")    |
| backdropColor    | Color of backdrop. It will override the css class style with inline style.   | String       | null (css class style: "#000000") |
| backdropOpacity  | Opacity of backdrop. It will override the css class style with inline style  | Number       | null (css class style: 0.7)       |

## License

MIT © [kerematam](https://github.com/kerematam)
