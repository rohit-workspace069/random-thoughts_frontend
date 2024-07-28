import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./comonent-style/CreatePost.css";

function CreatePost() {
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: "Rohit default",
      content: `${content}`,
    };
    axios
      .post("http://localhost:5000/api/createpost", data)
      .then((response) => {
        const serverResponse = response.data;
        console.log(serverResponse);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("New post created:", content);
    setContent("");
  };

  return (
    <div className="create-post-container">
      <div className="create-post-header">
        <img src="resources\rohitprofile.jpg" alt="Profile " />
        <span>@Rohit</span>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          className="create-post-input"
        />
        <div className="create-post-actions">
          <button type="submit" className="create-post-button">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
