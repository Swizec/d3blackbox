import React from "react";

import { D3RenderFunction, Props, State, D3RenderHookFunction } from "./types";

const D3blackbox = (D3render: D3RenderFunction): React.ComponentType<Props> =>
    class Blackbox extends React.Component<Props, State> {
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

            return React.createElement(Component, {
                transform: `translate(${x}, ${y})`,
                ref: this.anchor
            });
        }
    };

export default D3blackbox;

export const useD3 = function(render: D3RenderHookFunction) {
    const refAnchor = React.useRef(null);

    React.useEffect(() => {
        render(refAnchor.current);
    });

    return refAnchor;
};
