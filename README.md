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
      <Spotlight isActive renderLabel={<h1>This is backdrop view</h1>}>
        <div>Content with Spotlight Effect</div>
      </Spotlight>
    );
  }
}
```

### Usage with LabelWrapper

```jsx
import React from "react";
import Spotlight, { LabelWrapper } from "rc-spotlight";

const BackdropText = text => (
  <LabelWrapper center>
    <div>{text}</div>
  </LabelWrapper>
);

const App = () => (
  <Spotlight isActive renderLabel={BackdropText("This is title")}>
    <h1>Spotlight</h1>
  </Spotlight>
);
```

## Spotlight API

| Property                                    | Description                                                                                                       | Type             | Default |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| isActive                                    | Whether the component is enabled or disabled.                                                                     | Boolean          | false   |
| children                                    | Component(s) to have spotlight effect.                                                                            | Node(s)          | null    |
| renderLabel                                 | Funtion to return Component(s) to be rendered over backdrop.                                                      | Funtion          | null    |
| zIndex                                      | Z index of backdrop and wrapped component. It will override the css class style with inline style.                | Number or String | 1000    |
| backdropColor                               | Color of backdrop. It will override the css class style with inline style.                                        | String           | #000000 |
| backdropOpacity                             | Opacity of backdrop. It will override the css class style with inline style.                                      | Number           | 0.7     |
| inheritParentBackgroundColor (Experimental) | Resursively search for parent background color in case you don't want your component to inherit color of backdrop. This is useful when you wrap functional component with Spotlight where there is no real Dom element to give style. | Boolean          | false   |
| enableShadow                                | Gives shadow around wrapped component .                                                                           | Boolean          | false   |
| style                              | Inline style for wrapped component when spotlight is actived                                                      | Object           | null    |

## LabelWrapper API

| Property    | Description                                                                                        | Type             | Default |
| ----------- | -------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| children    | Component(s) to have spotlight effect.                                                             | Node(s)          | null    |
| zIndex      | Z index of backdrop and wrapped component. It will override the css class style with inline style. | Number or String | 1000
| center | Centers label of wrapped | Boolean |        false                                                     |
| style  | Inline style for label                                                                             | Object           | null    |

## License

MIT © [kerematam](https://github.com/kerematam)
