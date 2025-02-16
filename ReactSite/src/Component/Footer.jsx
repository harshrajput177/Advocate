import React from 'react';
import '../Styles/Footer.css'; // CSS file for styling
import { Link } from "react-router-dom";
import FooterImg from '../image/download.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section first-section">
        <h3>Services</h3>
        <ul>
          <li><a href="#Civil Law">Civil Law</a></li>
          <li><a href="#Criminal Law">Criminal Law</a></li>
          <li><a href="#Corporate Law">Corporate Law</a></li>
          <li><a href="#Family Law">Family Law</a></li>
          <li><a href="#careers">Blogs</a></li>
        </ul>
      </div>

      <div className="footer-section section-Quick">
        <h3>Quick Links</h3>
        <ul>
        <li><Link to="/about/profile">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-section  contact-info-section">
        <h3>Contact Information</h3>
        <div className='Footer-font-front'>
          <a href="tel:+91 7827438218"  className='phone-contact-link'>
        <PhoneIcon /> <p>+91 7827438218</p>
        </a>
        </div>
        <div className='Footer-font-front' >
        <a href="mailto:Advrajranichoudhary1711@gmail.com" className='email-contact-link'>
        <EmailIcon /> <p>rajranichoudhary1722@gmail.com</p> 
        </a>
        </div>
       <div  className='Footer-font-front'>
      <a href=""> <HomeIcon /> <p>Dhelwa Bagicha near by Mithapur Bypass
      Patna 800020, Bihar</p></a>
       </div>

        <h3 className='follow-us'>Follow us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/r.r.c_legalite?igsh=djkyMDIxdW4xNDE4"><InstagramIcon /></a>
          <a href=""><LinkedInIcon /></a>
          <a href="https://www.facebook.com/share/14gEhfyvHU/"><FacebookIcon /></a>
          <a href="https://t.me/+917827438218"><TelegramIcon /></a>
        
        </div>
      </div>

      <div className="footer-section">
        <img className='footer_img' src={FooterImg} alt="Footer Logo" />
      </div>

      {/* Bottom Line and Text */}
      <div className="footer-bottom">
      <hr className="footer-line" />
      <div className="footer-content">
      <p>© 2025 Adv. Raj Rani Choudhary (Patna High Court) </p>
      <a href="#privacy">Privacy Policy</a>
      </div>
  </div>
    </footer>
  );
}

export default Footer;