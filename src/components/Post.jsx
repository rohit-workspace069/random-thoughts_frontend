import React from "react";
import "./comonent-style/Post.css";

function Post() {
  return (<div className="postitem">
    <div className="Post">
      <div className="user-detail">
        <div className="user-image">
          <img src="#" alt="User Profile Pic." />
        </div>
        <div className="user-name">Rohit@007</div>
        <div className="tagline">your tagline</div>
      </div>
      <div className="post-content">“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”</div>
      <div className="post-interaction">
        <div className="like-comment">
          <div className="like">
            <i className="fas fa-thumbs-up" /> 10.222
          </div>
          <div className="comment">
            <i className="fas fa-comment" /> 26
          </div>
        </div>
        <div className="caption">Username instagram template #tagline</div>
        <div className="show-comments">View all 26 comments</div>
        <div className="time">6 DAYS AGO</div>
      </div>
    </div>
  </div>
  );
}

export default Post;
