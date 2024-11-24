import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [form, setForm] = useState({ fullName: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5177/api/user/register", form);
            setMessage("Registration successful!");
        } catch (error) {
            setMessage("Registration failed.");
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <a href="/">Login</a>
            </p>
            {message && <p className="error-message">{message}</p>}
        </div>
    );
};

export default Register;
