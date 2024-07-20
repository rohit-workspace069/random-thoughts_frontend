import React from 'react';
import './comonent-style/LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/login" >Login</Link></li>
                        <li><Link to="/signup" >Signup</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Welcome to our App!</h1>
                <p>This is a sample landing page.</p>
            </main>
        </div>
    );
};

export default LandingPage;