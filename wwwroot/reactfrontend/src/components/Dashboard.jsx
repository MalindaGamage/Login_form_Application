import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    };

    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;