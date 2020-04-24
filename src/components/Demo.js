import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Demo({ data }) {
  useEffect(() => {
    console.log('d3: ', d3);
    d3.select(`.demo`)
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')
      .text((item) => `${item.date}-${item.total}-${item.bandwidth}`)
      .transition()
      .duration(750)
      .style('color', (item) => {
        if (item.total % 2) {
          return 'red';
        } else {
          return 'blue';
        }
      });
  }, [data]);
  return (
    <>
      <div className="demo"></div>
    </>
  );
}

export default Demo;
