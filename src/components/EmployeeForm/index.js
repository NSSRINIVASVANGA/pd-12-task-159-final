import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const EmployeeForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    hoursWorked: "",
    tasksCompleted: "",
    timeSpent: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://task-159-employees.onrender.com/employees", {
        name: formData.name,
        hoursWorked: parseInt(formData.hoursWorked, 10),
        tasksCompleted: parseInt(formData.tasksCompleted, 10),
        timeSpent: parseInt(formData.timeSpent, 10),
      });

      setSuccess(response.data.message);
      setFormData({
        name: "",
        hoursWorked: "",
        tasksCompleted: "",
        timeSpent: "",
      });
    //   onSuccess(); // Refresh the parent data
    } catch (err) {
      setError("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="employee-form-container">
      <h2>Add Employee Details</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />
        </div>
        <div className="form-group">
          <label>Hours Worked</label>
          <input
            type="number"
            name="hoursWorked"
            value={formData.hoursWorked}
            onChange={handleChange}
            placeholder="Enter hours worked"
            required
          />
        </div>
        <div className="form-group">
          <label>Tasks Completed</label>
          <input
            type="number"
            name="tasksCompleted"
            value={formData.tasksCompleted}
            onChange={handleChange}
            placeholder="Enter tasks completed"
            required
          />
        </div>
        <div className="form-group">
          <label>Time Spent (hours)</label>
          <input
            type="number"
            name="timeSpent"
            value={formData.timeSpent}
            onChange={handleChange}
            placeholder="Enter time spent"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default EmployeeForm;
