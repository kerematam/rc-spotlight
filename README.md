# rc-spotlight

> Spotlight component simply highlights the component(s) that it wraps.

[![NPM](https://img.shields.io/npm/v/rc-spotlight.svg)](https://www.npmjs.com/package/rc-spotlight) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Install

```bash
npm install --save rc-spotlight
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
        <div>Content with Spotlight Effect</div>
      </Spotlight>
    );
  }
}
```

## Properties

| Property         | Description                                                                    | Type         | Default                           |
| ---------------- | -------------------------------------------------------------------------------| ------------ | --------------------------------- |
| isActive         | Whether the component is enabled or disabled.                                  | Boolean      | false                             |
| children         | Component(s) to have spotlight effect.                                         | Node(s)      | null                              |
| label            | Component(s) to be rendered over backdrop.                                     | ReactNode(s) | null                              |
| zIndex           | Z index of backdrop and wrapped component. It will override the css class style with inline style. | Number or String | 1000      |
| backdropColor    | Color of backdrop. It will override the css class style with inline style.     | String       | #000000                           |
| backdropOpacity  | Opacity of backdrop. It will override the css class style with inline style.   | Number       | 0.7                               |
| inheritParentBackgroundColor (Experimental) | Resursively search for parent background color in case you dont want your component to inherit color of backdrop.  | Boolean | false |
| centerLabel      | Centers label of wrapped component.                                            | Boolean      | false                             |
| enableShadow     | Gives shadow around wrapped component      .                                   | Boolean      | false                             |
| labelStyle       | Inline style for label                                                         | Object       | null                              |
| spotlightStyle   | Inline style for wrapped component when spotlight is actived                   | Object       | null                              |

## License

MIT © [kerematam](https://github.com/kerematam)
