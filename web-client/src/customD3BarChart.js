import React, { useRef, useEffect } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";

const dynamicSizing = ref => {
    console.log(ref)
    return { width: 150, height: 500 };
};

function BarChart({ data }) {
    const svgRef = useRef();
    const svgArea = dynamicSizing(svgRef)
    const padding = 0.2

    const barColor = isRain => {
        return !isRain ? "red" : "green"
    }

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);
        const xScale = scaleBand()
            .domain(data.map((d, idx) => idx ))
            .range([0, svgArea.height])
            .padding(padding);

        const yScale = scaleLinear()
            .domain([0, 100])
            .range([svgArea.width, 0]);

        const xAxis = axisBottom(xScale).ticks(data.length);

        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = axisLeft(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(0px)")
            .style("border-color", "grey")
            .call(yAxis);

        svg
            .selectAll(".bar") 
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .style("transform", "scale(1, -1)")
            .attr("x", (d, idx) => xScale(idx))
            .attr("y", -svgArea.width)
            .attr("width", xScale.bandwidth())
            .transition()
            .attr("fill", d => barColor(d.willRain))
            .attr("text", d => d.noOfEmployee)
            .attr("height", d => svgArea.width - yScale(d.noOfEmployee));

    }, [data,svgArea]);

    return (
        <div style={{ marginBottom: "2rem" }}>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </div>
    );
}

export default BarChart;