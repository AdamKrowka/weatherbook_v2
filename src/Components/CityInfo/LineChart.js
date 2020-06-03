import React from "react";
import "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, labels, value }) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: `temperature`,
            fill: false,
            lineTension: 0.1,
            borderColor: "rgba(255,255,0,1)",
            pointRadius: 1,
            data: data,
          },
        ],
      }}
      options={{
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            formatter: (text) =>
              `${text}${value ? (value == 1 ? " %" : " m/s") : " °C"}`,
            display: true,
            color: "white",
            backgroundColor: "rgba(200,200,200,0.0)",
            align: "top",
          },
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        layout: {
          padding: { left: 30, right: 30, top: 30, bottom: 30 },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 30,
              },
            },
          ],
        },
      }}
    ></Line>
  );
};

export default LineChart;
