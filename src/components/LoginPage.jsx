import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./comonent-style/LoginPage.css";


function LoginPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);

        const data = {
            email: `${email}`,
            password: `${password}`
          };

        axios
            .post("http://localhost:5000/api/login", data)
            .then((response) => {
                console.log(response.data);
                navigate('/homepage');
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome Back ! user</h2>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                        <label htmlFor="email">Email or Phone</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <a href="#" className="forgot-password">
                        Forgot password?
                    </a>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="signup-link">
                    Not a member? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;