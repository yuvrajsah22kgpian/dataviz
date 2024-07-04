import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ data, labels,x_axis_label,y_axis_label }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance if exists
      if (chartInstance) {
        chartInstance.destroy();
      }
      let label_String=y_axis_label+" "+"vs"+" "+x_axis_label;

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: label_String,
              data: data,
              backgroundColor: 'rgba(40, 100, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: y_axis_label
              }
          }],
          xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: x_axis_label
              }
          }]
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
