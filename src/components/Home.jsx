import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./comonent-style/Home.css";
import Post from "./Post";
import allposts from "../posts";

function addPost(post) {
  return <Post
    key={post.id}
    username={post.username}
    content={post.content}
    commentCount={post.commentCount}
    likeCount={post.like}
  />;

};

function Home() {
  return (
    <div>
      <Header />
      <div className="Home">

        {allposts.map(addPost)}

      </div>
      <Footer />
    </div>
  );
}

export default Home;
