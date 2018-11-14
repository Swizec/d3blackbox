import React from "react";
import * as d3 from "d3";

import { useD3 } from "./index";

// Recaman sequence animation borrowed from http://blockbuilder.org/johnwalley/25b77d49bbbee7aef480d7598708e039

function recaman(svg, width, height) {
    var n = 60;

    var curr = 0;
    var seq = [curr];

    for (var i = 1; i < n; i++) {
        var next = curr - i;

        if (next < 0 || seq.includes(next)) {
            curr = curr + i;
            seq.push(curr);
        } else {
            curr = next;
            seq.push(next);
        }
    }

    console.log(seq);

    var data = [];
    var sign = 1;

    for ( i = 0; i < n - 1; i++) {
        var center = (seq[i] + seq[i + 1]) / 2;
        var radius = Math.abs(seq[i] - seq[i + 1]) / 2;
        var dir = Math.sign(seq[i + 1] - seq[i]);
        data.push({ center: center, radius: radius, sign: sign, dir: dir });
        sign = -sign;
    }

    console.log(data);

    var g = d3.select(svg).append("g");

    var x = d3
        .scaleLinear()
        .range([0, width])
        .domain([0, d3.max(seq)]);

    var arc = d3
        .arc()
        .innerRadius(function(d) {
            return x(d.radius);
        })
        .outerRadius(function(d) {
            return x(d.radius);
        })
        .endAngle(function(d) {
            return (
                d.dir * d.sign * (Math.PI / 2) + ((d.sign - 1) * Math.PI) / 2
            );
        })
        .startAngle(function(d) {
            return (
                -d.dir * d.sign * (Math.PI / 2) + ((d.sign - 1) * Math.PI) / 2
            );
        });

    var DURATION = 300;

    g.selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("stroke", "steelblue")
        .attr("stroke-width", "2")
        .attr("d", arc)
        .attr("transform", function(d) {
            return "translate(" + x(d.center) + ",240)";
        })
        .attr("stroke-dasharray", function(d) {
            return this.getTotalLength() + ", " + this.getTotalLength();
        })
        .attr("stroke-dashoffset", function(d) {
            return this.getTotalLength();
        })
        .transition()
        .delay(function(d, i) {
            return i * DURATION;
        })
        .duration(DURATION * 2)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
}

const Recaman = ({ x, y, width, height }) => {
    const refAnchor = useD3(anchor => recaman(anchor, width, height));

    return <g ref={refAnchor} transform={`translate(${x}, ${y})`} />;
};

export default Recaman;