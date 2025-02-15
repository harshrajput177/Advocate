import React from "react";
import "../../Styles/LandingCom6.css";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

const HomeC10 = () => {
  return (
    <div className="HomeC10-contact-container">
      {/* Left Section */}
      <div className="HomeC10-form-section">
        <h2>
          Get in <span className="highlight">Touch</span>
        </h2>
        <p>
          Have questions? Submit your inquiry and let us guide you toward <br /> the
          perfect educational journey for your child.
        </p>
        <form className="LandingCom6-form">
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone number *" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <br></br>
          <button type="HomeC10-submit-btn">SEND</button>
        </form>
        <div className="HomeC10-contact-info">
          <div>
            <span className="get-in-touch-phn"> <WifiCalling3OutlinedIcon />PHONE</span>
            <p>+91 7827438218</p>
          </div>
          <div>
            <span  className="get-in-touch-phn"><DraftsOutlinedIcon /> EMAIL</span>
            <p>Advrajranichoudhary1711@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="map-section">
  <iframe
    title="Google Map"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6327085634644!2d85.12287457614679!3d25.608897577427263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583f19555555%3A0x6d4c4f90b4050300!2sPatna%20High%20Court!5e0!3m2!1sen!2sin!4v1707451234567"
    width="100%"
    height="100%"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
  <div className="map-section-corner-border_1"></div>
  <div className="map-section-corner-border_2"></div>
</div>

    </div>
  );
};

export default HomeC10;