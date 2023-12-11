```javascript
import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ data }) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: 'Data',
        data: data.map((item) => item.value),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default Chart;
```
