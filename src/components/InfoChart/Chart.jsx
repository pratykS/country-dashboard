import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const Chart = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { data } = props;
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, data);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
