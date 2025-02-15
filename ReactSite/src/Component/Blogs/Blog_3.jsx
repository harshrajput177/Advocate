
import React from "react";
// import { useNavigate } from "react-router-dom";
import BlogCard from "./Blog_2";
import cirmialImg from '../../image/cirminalLawyers.jpg';
import CourtMarImg from '../../image/court-marriage-patna.jpg';
import DivorceImg from '../../image/DivorceImg.jpg';
import WomanrightImg from '../../image/laws-for-women.jpg';
import MartalRapeImg from '../../image/Marital-Rapeimg.jpg';
import FamilyImg from '../../image/ai-generated-family-law-figure-of-parents-with-children-scales-and-gavel-on-wooden-table-photo.jpg';

const BlogSection = () => {
  const blogs = [
    { id: 1, image: cirmialImg, title: "Understanding Criminal Law in India: A Comprehensive Guide", date: "APRIL 10, 2024", comments: "NO COMMENTS", description: "Navigating Testamentary Waters: Crafting a Comprehensive Will ..." },
    { id: 2, image: CourtMarImg, title: "Court Marriages in India: Legal Process and Rights", date: "JANUARY 28, 2023", comments: "NO COMMENTS", description: "Court marriage in India is a legally recognized process..." },
    { id: 3, image: DivorceImg, title: "Divorce Laws in India: A Legal Perspective", date: "JANUARY 28, 2023", comments: "NO COMMENTS", description: "Divorce is often a difficult and emotionally challenging decision..." },
    { id: 4, image: WomanrightImg, title: "Laws Protecting Women in India: A Legal Overview", date: "APRIL 10, 2024", comments: "NO COMMENTS", description: "Women in India have been granted several legal rights..." },
    { id: 5, image: MartalRapeImg, title: "Marital Rape in India: Legal Challenges and Solutions", date: "JANUARY 28, 2025", comments: "NO COMMENTS", description: "Marital rape, the act of forcing a spouse into non-consensual..." },
    { id: 6, image: FamilyImg, title: "Family Laws in India: A Guide for Advocates and Clients", date: "JANUARY 28, 2025", comments: "NO COMMENTS", description: "Marital rape, the act of forcing a spouse into non-consensual..." },
  ];

  return (
    <div className="blog-section">
      <h1 className="blog-heading">Learn Some Important Laws</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
