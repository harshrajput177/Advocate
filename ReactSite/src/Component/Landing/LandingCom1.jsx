import React from "react";
import { useNavigate } from "react-router-dom"; 
import Slider from "react-slick";
import '../../Styles/LandingCom1.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from '../../image/HighCourtImage.jpg';
import heroImg2 from '../../image/vecteezy_handshake-after-good-cooperation_1308502.jpg';
import heroImg3 from '../../image/vecteezy_judge-gavel-with-justice-lawyers-having-team-meeting-at-law_11831103.jpg';
import heroImg4 from '../../image/gettyimages-1251947272-612x612.jpg';
import heroImg5 from '../../image/businessman-signing-important-contract-papers.jpg';

function  Landing() {
  
  const navigate = useNavigate();
  const handleAdmissionClick = () => {
    navigate("/"); // Programmatically navigate to the admissions page
  };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Auto-play speed (3 seconds)
    rtl: true, // Enable right-to-left sliding
    arrows: false, // Hide navigation arrows
  };

  return (
  
      <div className="Home-container-box">
        <div className="hero-contents">
          <h1>
          Defending your future,<br /> protecting your 
          <br />rights.
          </h1>
          <button className="HomeC1-front-button">
            <span onClick={handleAdmissionClick} className="Admission-text-size">
            Free Consultation
            </span>
          </button>
        </div>
        <Slider {...settings} className="hero-slider">
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg1} alt="Slide 1" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg2} alt="Slide 2" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg3} alt="Slide 3" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg4} alt="Slide 4" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg5} alt="Slide 5" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
        </Slider>
      </div>
  );
}

export default Landing;