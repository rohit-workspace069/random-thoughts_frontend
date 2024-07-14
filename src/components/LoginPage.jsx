import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./comonent-style/LoginPage.css";

function LoginPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleEmailChange(event){
        setEmail(event.target.value);
       
    };

    function handlePasswordChange(event){
        setPassword(event.target.value);
       
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(email);
        console.log(password);
        
        navigate('/homepage');

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
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
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