import { useState } from "react";
import Chart from "./Chart";

const InfoChart = (props) => {
  const { data } = props;

  //@todo - toggle chart type
  const [chartType, setChartType] = useState("bar");

  const labelsArray = data && data.map((d) => d.name);
  const dataArray = data && data.map((d) => d.population);

  const chartConfig = {
    type: chartType,
    data: {
      labels: labelsArray,
      datasets: [
        {
          label: "Population",
          data: dataArray,
          backgroundColor: "auto",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <div>
      <Chart data={chartConfig}></Chart>
    </div>
  );
};

export default InfoChart;
