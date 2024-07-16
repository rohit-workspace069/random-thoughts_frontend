import React, { useState, useEffect } from "react";
import "./comonent-style/Home.css";
import axios from 'axios';

import Post from "./Post";

function Home() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios
     .get("http://localhost:5000/api/allpost")
     .then((response) => {
        setPosts(response.data); // Update the state with the received data
      })
     .catch((error) => {
        console.error(error);
      });
  }, []);

  const addPost = (post) => {
    return (
      <Post
        key={post.id}
        username={post.username}
        content={post.content}
        commentCount={post.commentCount}
        likeCount={post.like}
      />
    );
  };

  return (
    <div>
      <div className="Home">
        {posts.map(addPost)}
      </div>
    </div>
  );
}

export default Home;
