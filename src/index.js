import React, { Component } from "react";

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
            return <g transform={`translate(${x}, ${y})`} ref={this.anchor} />;
        }
    };
}
