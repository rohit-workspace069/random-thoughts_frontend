import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./comonent-style/LoginPage.css";


function LoginPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [returnMessage, setreturnMessage] = useState();

    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email: `${email}`,
            password: `${password}`
        };

        axios
            .post("http://localhost:5000/api/login", data)
            .then((response) => {
                const serverResponse = response.data.message;
                if (serverResponse === "Account not exist, Try SignUp") {
                    setreturnMessage("Account not exist, SignUp Now !");
                    setIsVisible(true);
                } else if (serverResponse === "correct password") {
                    navigate('/homepage');
                } else {
                    setreturnMessage("your password was incorrect. Try again with correct password");
                    setIsVisible(true);
                }
            })
            .catch((error) => {
                console.error(error);
                
                setreturnMessage("server error. Try again after sometime");
                setIsVisible(true);

            });
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
                <div className="messagebox" style={{ display: isVisible ? 'block' : 'none' }}>
                    <p>*{returnMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;