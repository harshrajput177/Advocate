import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Styles/Blog-CSS/Blog_2.css'

const BlogCard = ({ image, title, date, comments, description, id }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog2-blog-card">
      <img src={image} alt={title} className="blog2-blog-image" />
      <div className="blog2-blog-content">
        <h2 className="blog2-blog-title">{title}</h2>
        <p className="blog2-blog-meta">{date} , {comments}</p>
        <p className="blog2-blog-description">{description}</p>
        <button className="blog2-blog-button" onClick={handleReadMore}>Read More »</button>
      </div>
    </div>
  );
};

export default BlogCard;
