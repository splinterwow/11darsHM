
import React from "react";
import { Line } from "react-chartjs-2";
import jsonData from "../data/data.json";
import { Box } from "@mui/material";
import "chart.js/auto";

const LineCharts = () => {

  const labels = jsonData.map((entry) =>
    new Date(entry.time).toLocaleDateString()
  );

  const dataValues = jsonData.map((entry) => entry.value);

  const data = {

    labels: labels,
    datasets: [
      {
        label: `${jsonData[0].source} to ${jsonData[0].target}`,
        data: dataValues,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {

    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (

    <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
      <Line data={data} options={options} />
    </Box>
    
  );
};

export default LineCharts;
