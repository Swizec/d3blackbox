# d3blackbox

[![npm package][npm-badge]][npm]

Take any D3 example you find in the wild and wrap it in a React component. Great for quick experiments and meeting deadlines. 😛

## Meet your deadline in 2 minutes

Check out how it works in [a live Codesandbox](https://codesandbox.io/s/9jm82v2lry)

1. Install `d3blackbox` with npm

```
$ npm install -s d3blackbox
```

2. Find a D3 example you like
3. Copy its code, put it in a function
4. Wrap function in `D3blackbox`

```javascript
import React from "react";
import D3blackbox from "d3blackbox";
import * as d3 from "d3";

const MyDataviz = D3blackbox(function(anchor, props, state) {
    const svg = d3.select(anchor.current);

    // the rest of your D3 code
});

export default MyDataviz;
```

5. Render inside an `<svg></svg>` element
6. Enjoy your blackbox D3 component

D3blackbox renders an anchor element and delegates control to your render function. You get an `anchor` ref, the component's `props`, and `state`. Do what you want :)

Great for meeting deadlines and playing around with other people's code. Not recommended for large scale use due to performance constraints. Your render function runs on every component update and redraws the entire DOM subtree. React's rendering engine can't help you.

That's why it's called a sandbox.

## What if I don't use D3?

That's okay. `D3blackbox` lets you delegate control to any rendering library you want. As long as you're okay rendering into a `<g></g>` element.

You can even use this approach to render Vue apps inside your React apps. 🤨

## What if I don't want `<g>`?

That's okay you weirdo. Use the `component` argument to specify a different component.

```javascript
render() {
    return <MyDataviz component="div" />
}
```

## HOCs are so September, do you have hooks?

Yes. Hooks are alpha support and all that, but here's how you can use D3 blackbox as a React hook.

```javascript
import { useD3 } from "d3blackbox";

function renderSomeD3(anchor) {
    d3.select(anchor);

    // ...
}

const MyD3Component = ({ x, y }) => {
    const refAnchor = useD3(anchor => renderSomeD3(anchor));

    return <g ref={refAnchor} transform={`translate(${x}, ${y})`} />;
};
```

## With love ❤️

Built with love by Swizec<br>
Cheers

Only took me 2 years to get around to opensourcing this 😅

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
