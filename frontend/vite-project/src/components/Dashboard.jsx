import React from 'react';
import '../App.css';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="card-row">
        <Card title="Essentials" amount="$24,780" change="+49%" />
        <Card title="Savings" amount="$17,489" change="-14%" />
        <Card title="Leisure" amount="$9,962" change="+29%" />
      </div>

      <div className="bottom-row">
        <div className="chart-box">
          <h2>Income vs Expenses</h2>
          <p className="income">$8.25K Income</p>
          <p className="expenses">$27.7K Expenses</p>
          <div className="chart-wrapper">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="chart-box">
          <h2>Real-Time Balance</h2>
          <p className="balance">
            $53.37 <span className="down">-8.80%</span>
          </p>
          <div className="chart-wrapper">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, amount, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="amount">{amount}</p>
      <p className={`change ${isPositive ? 'positive' : 'negative'}`}>{change}</p>
    </div>
  );
};

// Gradient bar chart
const barData = {
  labels: ['Dec 22', 'Jan 23', 'Feb 23', 'Apr 23', 'May 23'],
  datasets: [
    {
      label: 'Direct',
      data: [1200, 2600, 1800, 1500, 2300],
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#4f9aff');
        gradient.addColorStop(1, '#1a1c22');
        return gradient;
      },
      borderRadius: 10,
      barThickness: 28,
    },
    {
      label: 'Indirect',
      data: [5000, 4800, 5600, 5200, 4900],
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#9a6bff');
        gradient.addColorStop(1, '#1a1c22');
        return gradient;
      },
      borderRadius: 10,
      barThickness: 28,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#d1d5db',
        font: { size: 14 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#ffffff',
      bodyColor: '#9ca3af',
    },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
    y: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
  },
};

const lineData = {
  labels: ['1:11:21', '1:11:30', '1:11:39', '1:11:48', '1:11:57', '1:12:06', '1:12:15', '1:12:24'],
  datasets: [
    {
      label: 'Balance',
      data: [60, 58, 57, 55, 52, 50, 51, 53],
      borderColor: '#4f9aff',
      backgroundColor: 'rgba(79, 154, 255, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
    y: {
      min: 20,
      max: 80,
      ticks: { color: '#9ca3af' },
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
    },
  },
};

export default Dashboard;
