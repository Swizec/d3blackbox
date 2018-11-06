import React, { Component } from "react";
import { render } from "react-dom";

import Barchart from "./Barchart";
import "./style.css";

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>d3blackbox Demo</h1>

                <p>
                    Take any D3 example you find in the wild and wrap it in a
                    React component. Great for quick experiments and meeting
                    deadlines. 😛
                </p>

                <p>
                    <a href="https://github.com/Swizec/d3blackbox">
                        Source code on GitHub
                    </a>
                </p>

                <h2>Basic usage</h2>

                <p>
                    A{" "}
                    <a href="https://cdn.rawgit.com/mbostock/3885304/raw/a91f37f5f4b43269df3dbabcda0090310c05285d/index.html">
                        barchart from D3
                    </a>{" "}
                    docs wrapped in a React component. Takes about 2 minutes to
                    do from scratch.
                </p>

                <svg width="800" height="250">
                    <Barchart x={10} y={10} width={300} height={200} />
                </svg>

                <h3>
                    1. Install <code>d3blackbox</code> and <code>d3</code>
                </h3>
                <p>
                    <pre>$ npm install d3blackbox</pre>
                </p>
                <h3>
                    2. Wrap D3 code in <code>D3blackbox</code>
                </h3>
                <p>
                    <pre>
                        {`
import React from "react";
import D3blackbox from "d3blackbox";
import * as d3 from "d3";

const Barchart = D3blackbox(function(anchor, props, state) {
    const svg = d3.select(anchor.current);

    // the rest of your D3 code
});

export default Barchart;`}
                    </pre>
                </p>
                <h3>3. Render your component</h3>
                <p>
                    <pre>{`
<Barchart x={10} y={10} width={300} height={200} />
                    `}</pre>
                </p>
                <p>
                    <svg width="800" height="250">
                        <Barchart x={10} y={10} width={300} height={200} />
                    </svg>
                </p>

                <h2>Use different anchor component</h2>
                <p>
                    By default D3blackbox wraps your D3 render method in a
                    &lt;g&gt; element. You can change that with the{" "}
                    <code>component</code> prop.
                </p>
                <p>
                    <pre>{`
<Barchart componenet="div" />
                    `}</pre>
                </p>
                <p>Make sure your renderer knows how to handle that.</p>
                <p />

                <h2>Use with React hooks</h2>

                <p>
                    Built by <a href="https://swize.com">Swizec</a>,<br />
                    Cheers ❤️
                </p>
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
