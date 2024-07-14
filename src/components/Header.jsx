import React from "react";
import "./comonent-style/Header.css";



function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Connect To Me logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a className="nav-link" href="/homepage">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/homepage">
              Profile
            </a>
          </li>
          <li>
            <a className="nav-link" href="/homepage">
              Message
            </a>
          </li>
          <li>
            <a className="nav-link" href="/homepage">
              Notifications
            </a>
          </li>
          <li>
            <a className="nav-link" href="/home">
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="profile-dropdown">
        <img src="/homepage" alt="profile" />
        <ul>
          <li>
            <a href="/homepage">View Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
