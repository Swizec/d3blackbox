import React, { Component } from "react";
import { render } from "react-dom";

import Barchart from "./Barchart";
import "./style.css";

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>d3blackbox Demo</h1>
                <svg width="800" height="600">
                    <Barchart x={10} y={10} width={300} height={200} />
                </svg>
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
