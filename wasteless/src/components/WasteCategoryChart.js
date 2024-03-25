import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const WasteCategoryChart = ({ wasteRecords }) => {
  if (!wasteRecords) {
    return null; // Return null if wasteRecords is not yet available
  }

  // Initialize an object to store the count of each waste category
  const categoryCounts = {
    NORMAL_WASTE: 0,
    E_WASTE: 0,
    LIGHTING_WASTE: 0,
    WASTE_TREATMENT: 0,
    CASH_FOR_TRASH: 0,
  };

  // Count the occurrences of each category
  wasteRecords.forEach((record) => {
    if (categoryCounts.hasOwnProperty(record.category)) {
      categoryCounts[record.category]++;
    }
  });

  // Extract labels and data for the Pie chart from the categoryCounts object
  const labels = Object.keys(categoryCounts);
  const data = Object.values(categoryCounts);

  // Define colors for each category
  const backgroundColors = [
    "#ff6384",
    "#36a2eb",
    "#ffce56",
    "#ff9f40",
    "#4bc0c0",
  ];

  // Generate the dataset for the Pie chart
  const dataset = {
    labels: labels,
    datasets: [
      {
        label: "Waste Categories",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  // Customize the options for the Pie chart
  const options = {
    plugins: {
      legend: {
        position: "left",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = data.reduce((acc, curr) => acc + curr, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return <Pie data={dataset} options={options} />;
};

export default WasteCategoryChart;
