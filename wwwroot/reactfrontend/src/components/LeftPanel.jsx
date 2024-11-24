import React from "react";
import illustration from "../assets/logo512.png"; // Replace with your image

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <img src={illustration} alt="Welcome Illustration" className="panel-image" />
            <h2>Welcome Back!</h2>
            <p>Join us and manage your profile easily.</p>
        </div>
    );
};

export default LeftPanel;
