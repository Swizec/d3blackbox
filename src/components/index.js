import React from "react";
import * as d3 from "d3";


export default function D3blackbox(D3render) {
    return class Blackbox extends React.Component {
        anchor = React.createRef();

        componentDidMount() {
            D3render(this.anchor, this.props, this.state);
        }
        componentDidUpdate() {
            D3render(this.anchor, this.props, this.state);
        }

        render() {
            const { x, y } = this.props;
            const Component = this.props.component || "g";

            return (
                <Component
                    transform={`translate(${x}, ${y})`}
                    ref={this.anchor}
                />
            );
        }
    };
}

export const useD3 = function renderSomeD3(refAnchor) {
    d3.select(refAnchor.current);

    // ...
    return refAnchor;
}