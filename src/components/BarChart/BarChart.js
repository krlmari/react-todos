import React from 'react';
import './BarChart.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Гистограмма',
            color: 'black'
        }
    },
    responsive: true,
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
    }
};

function BarChart({ data }) {
    const chartData = {
        labels: data.map((data) => data.userId),
        datasets: [
            {
                label: 'completed = true',
                data: data.map((data) => data.completedCount),
                backgroundColor: 'green'
            },
            {
                label: 'completed = false',
                data: data.map((data) => data.uncompletedCount),
                backgroundColor: 'red'
            }
        ]
    };

    return <Bar data={chartData} options={options} className="chart" />;
}

export default BarChart;
