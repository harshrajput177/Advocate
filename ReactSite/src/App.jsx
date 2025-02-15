import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Component/Navbar";
import Home from "./Pages/LandingPages";
import Contact from "./Pages/Contact-Page/ContactPage";
import Footer from "./Component/Footer";
import ConsultationForm from "./Component/ConsultationForm";
import AboutProfile from "./Pages/AboutProfile-Page/AboutProfile";
import AboutMis_Vis from "./Pages/AboutM&V-Page/AboutMis&Vis";
import Services from "./Pages/Services-Page/ServicesPage";
import Blog from "./Pages/Blog-Page/BlogPage";
import Assistance from "./Component/Assistance";
import BlogDetail from "./Component/Blogs/Blog_4";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};


  const AppContent = () => {
    const location = useLocation();
    const [isFormVisible, setFormVisible] = useState(false);
  
    useEffect(() => {
  
     
      // Show the admission form only on the homepage
      if (location.pathname === "/") {
        setFormVisible(true);
      } else {
        setFormVisible(false);
      }
    }, [location]);
  
    const toggleForm = () => {
      setFormVisible(!isFormVisible);
    };


  return (
    <>    
      <NavBar  toggleForm={toggleForm}/>
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/" element={<Home />}  toggleForm={toggleForm}/>
        <Route path="/about/profile" element={<AboutProfile />} />
        <Route path="/about/mission-vision" element={<AboutMis_Vis />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/Assistance" element={<Assistance />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />

      {isFormVisible && (
        <div className="Amission-overlay">
          <div className="admission-form-container">
            <ConsultationForm closeForm={toggleForm} />
          </div>
        </div>
      )}
  </>

  )
}


export default App
