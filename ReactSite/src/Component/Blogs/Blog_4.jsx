import React from "react";
import { useParams } from "react-router-dom";
import cirmialImg from '../../image/CriminalLaw.jpg';
import CourtMarImg from '../../image/court-marrige-second-img.jpg';
import DivorceImg from '../../image/vecteezy_judge-gavel-with-justice-lawyers-having-team-meeting-at-law_11831103.jpg';
import WomanrightImg from '../../image/laws-for-women.jpg';
import MartalRapeImg from '../../image/Marital-Rapeimg.jpg';
import FamilyImg from '../../image/FLMimg.jpg';
import { blogContents } from "../Blogs/BlogContent"; // Importing content file
import '../../Styles/Blog-CSS/Blog_3.css';

const blogs = [
  { id: 1, image: cirmialImg, title: "Understanding Criminal Law in India: A Comprehensive Guide" },
  { id: 2, image: CourtMarImg, title: "Court Marriages in India: Legal Process and Rights" },
  { id: 3, image: DivorceImg, title: "Divorce Laws in India: A Legal Perspective" },
  { id: 4, image: WomanrightImg, title: "Laws Protecting Women in India: A Legal Overview" },
  { id: 5, image: MartalRapeImg, title: "Marital Rape in India: Legal Challenges and Solutions" },
  { id: 6, image: FamilyImg, title: "Family Laws in India: A Guide for Advocates and Clients" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id);
  const blog = blogs.find((b) => b.id === blogId);
  const blogContent = blogContents[blogId]; // Fetch full content from blogContents

  if (!blog || !blogContent) return <h2></h2>;

  return (
    <div className="Blog4-blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog4-image" />
      {/* Using dangerouslySetInnerHTML for rich HTML content */}
      <div className="Blog4-blog-Content" dangerouslySetInnerHTML={{ __html: blogContent.content }} />
    </div>
  );
};

export default BlogDetail;

