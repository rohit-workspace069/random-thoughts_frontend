import React from "react";
import "./comonent-style/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/" ><img src="resources\logo.png" alt="logo" /></Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
          <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li>
          <Link className="nav-link" to="/profilepage" >Profile</Link>
          </li>
          <li>
          <Link className="nav-link" to="/createpost" >Post+</Link>
          </li>
          <li>
          <Link className="nav-link" to='/workinprogress' >Message</Link>
          </li>
          <li>
          <Link className="nav-link" to='/workinprogress' >Notifications</Link> 
          </li>
          <li>
          <Link className="nav-link" to='/workinprogress' >Settings</Link>  
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="profile-dropdown">
        <img src="resources\rohitprofile.jpg" alt="profile" />
        <ul>
          <li>
          <Link to="/profilepage" >View Profile</Link>
          </li>
          <li>
          <Link to='/workinprogress' >Settings</Link>
          </li>
          <li>
          <Link to="/login" >Logout</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
