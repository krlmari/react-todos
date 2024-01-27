import React from 'react';
import './BarChart.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale);

export const options = {
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

function BarChart(props) {
    const chartData = {
        labels: props.data.map((data) => data.userId),
        datasets: [
            {
                label: 'completed = true',
                data: props.data.map((data) => data.completedTrue),
                backgroundColor: 'green'
            },
            {
                label: 'completed = false',
                data: props.data.map((data) => data.completedFalse),
                backgroundColor: 'red'
            }
        ]
    };

    return <Bar data={chartData} options={options} className="chart" />;
}

export default BarChart;
