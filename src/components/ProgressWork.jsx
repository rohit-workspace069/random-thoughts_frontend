import React from 'react';
import "./comonent-style/ProgressWork.css";

function ProgressWork() {
    return (
        <div className="container">
            <div className="imgContainer">
            <img src="/resources/progress-img.png" alt="work in progress" />
            <div className="text">WORK IN PROGRESS ... </div>
        </div>
        </div>
    );
}

export default ProgressWork;