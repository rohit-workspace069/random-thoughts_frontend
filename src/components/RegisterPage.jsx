import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./comonent-style/RegisterPage.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [returnMessage, setreturnMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const data = {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      };

      axios
        .post("http://localhost:5000/api/register", data)
        .then((response) => {
          const serverResponse = response.data.message;
          console.log(response.data);
          if (serverResponse === "Account already exist, Try Login") {
            setreturnMessage(
              "Account already exist with this email, Try Login"
            );
            setIsVisible(true);
          } else {
            navigate("/home");
            setreturnMessage("Unknown error");
            setIsVisible(true);
          }
        })
        .catch((error) => {
          console.error(error);
          setreturnMessage("Unknown server error, Try again after sometime");
          setIsVisible(true);
        });
    } else {
      setreturnMessage("confirm password did not match! try again!");
      setIsVisible(true);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Welcome New user!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Create password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="termCheckbox">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
            <label htmlFor="terms">I accept all terms & conditions</label>
          </div>
          <button type="submit">Register Now</button>
        </form>
        <p className="login-link">
          Already Have Account <Link to="/login">Login</Link>
        </p>
        <div
          className="messagebox"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <p>*{returnMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
