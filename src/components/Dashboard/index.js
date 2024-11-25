import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import './index.css'

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, LineElement, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://task-159-employees.onrender.com/employees");
        setEmployeeData(response.data);

        const recommendationResponse = await axios.get("https://task-159-employees.onrender.com/recommendations");
        setRecommendation(recommendationResponse.data.recommendation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const hoursWorkedData = {
    labels: employeeData.map((emp) => emp.name),
    datasets: [
      {
        label: "Hours Worked",
        data: employeeData.map((emp) => emp.hoursWorked),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const tasksCompletedData = {
    labels: employeeData.map((emp) => emp.name),
    datasets: [
      {
        label: "Tasks Completed",
        data: employeeData.map((emp) => emp.tasksCompleted),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const timeSpentData = {
    labels: employeeData.map((emp) => emp.name),
    datasets: [
      {
        label: "Time Spent",
        data: employeeData.map((emp) => emp.timeSpent),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Employee Performance Analytics</h1>

      <div className="recommendation-section">
        <h3>Recommendation</h3>
        <p>{recommendation}</p>
      </div>

      <div className="charts-container">
        <div className="chart-item">
          <h3>Hours Worked</h3>
          <Bar data={hoursWorkedData} options={{ maintainAspectRatio: false }} />
        </div>

        <div className="chart-item">
          <h3>Tasks Completed</h3>
          <Line data={tasksCompletedData} options={{ maintainAspectRatio: false }} />
        </div>

        <div className="chart-item">
          <h3>Time Spent</h3>
          <Pie data={timeSpentData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
