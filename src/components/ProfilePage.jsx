import React from "react";
import Post from "./Post";
import "./comonent-style/ProfilePage.css";

// import allposts from "../posts";



function UserProfile() {
    return ( <div>
        <div className="profile-page">
            <div className="profile-header">
                <img src="resources\rohitprofile.jpg" alt="Profile" className="profile-pic" />
                <div className="profile-info">
                    <h2>Rohit Ahirwar</h2>
                    <p>Rohit@007</p>
                    <p>rohit@gmail.com</p>
                    <p>I LOVE COOKING</p>
                </div>
            </div>
            <div className="posts-container">
                <h3>Posts</h3>
                <Post
                    username= "Rohit Ahirwar"
                    content= "Hello From Rohit"
                    commentCount= "27"
                    likeCount= "215"
                />;
            </div>
        </div>
    </div>);
}

export default UserProfile;
