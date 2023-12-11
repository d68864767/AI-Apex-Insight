import React from 'react';
import Chart from '../visualization/Chart';

function Visualization({ data }) {
  return (
    <div className="visualization">
      <h2>Data Visualization</h2>
      <Chart data={data} />
    </div>
  );
}

export default Visualization;
