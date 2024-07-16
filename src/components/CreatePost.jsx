import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./comonent-style/CreatePost.css";



function CreatePost() {

  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new post to the database or API here
    console.log('New post created:', content, image);
    setContent(''); // clear the input field
    setImage(null); // clear the image field
    navigate('/profilepage');
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
          <label htmlFor="image-upload">
            <i className="fas fa-image" />
          </label>
          <input
            type="file"
            id="image-upload"
            onChange={handleImageChange}
            accept="image/*"
          />
          <button type="submit" className="create-post-button">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreatePost;
