import React from "react";
import "./comonent-style/Post.css";

function Post(props) {
  return (
    <div className="postitem">
      <div className="Post">
        <div className="user-detail">
          <div className="user-image">
            <img src="resources\rohitprofile.jpg" alt="Userprofile" />
          </div>
          <div className="user-name">{props.username} </div>
        </div>
        <div className="post-content">{props.content}</div>
        <div className="post-interaction">
          <div className="like-comment">
            <div className="like">
              Like-:
              <i className="fas fa-thumbs-up" /> {props.likeCount}
            </div>
            <div className="comment">
              {" "}
              Comments-:
              <i className="fas fa-comment" /> {props.commentCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
