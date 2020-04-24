import React, { useEffect } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  useEffect(() => {
    drawBarChart(data);
  }, [data]);
  const drawBarChart = (data) => {
    if (data.length === 0) return;
    console.log(d3);
    const canvasHeight = 400;
    const canvasWidth = data.length * 45 + 10;
    const svgCanvas = d3
      .select('.canvas')
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .style('border', '1px solid black');
    svgCanvas
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', (item) => Number(item.total) / 100000)
      .attr('fill', 'orange')
      .attr('x', (item, i) => i * 45 + 10)
      .attr('y', (item) => canvasHeight - Number(item.total) / 100000 - 10)
      .text((item) => item.total);
  };
  return <div className="canvas"></div>;
}
export default BarChart;
