"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Box } from "@chakra-ui/react";

// Register required chart components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart: React.FC = () => {
  // Chart Data
  const data = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"],
    datasets: [
      {
        label: "History of bids (12 people are bidding)",
        data: [500, 700, 800, 1200, 1500, 1800],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box mt={4} w={{base:'300px', lg:'500px'}} h={{base:'200px', lg:'200px'}}>
      <Line data={data} options={options} />
    </Box>
  );
};

export default LineChart;