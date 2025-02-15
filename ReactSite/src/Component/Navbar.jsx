import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../image/download.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = ({ toggleForm }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = {
    ABOUT: [
      { label: "Profile", to: "/about/profile" },
      { label: "Mission & Vision", to: "/about/mission-vision" },
    ],
  };

  return (
    <header className="nav-header">
      <div className="header-top">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact-info-nav">
          <span className="two-numbers">
            <a href="tel:+919771485809" className="contact-link">
              <PhoneIcon className="Navbar-Phone" />
              +91 7827438218
            </a>
          </span>
          <span className="email-text">
            <a href="mailto:mlzsbihta@gmail.com" className="contact-link">
              <EmailIcon className="Navbar-mail" />
              rajranichoudhary1722@gmail.com
            </a>
          </span>
        </div>
        <div>
          <ul className="Social-media-Icons">
            <li><a href="https://www.facebook.com/share/14gEhfyvHU/"><FacebookIcon className="Navbar-icons" /></a></li>
            <li><a href="https://www.facebook.com/share/14gEhfyvHU/"><InstagramIcon className="Navbar-icons"/></a></li>
            <li><LinkedInIcon className="Navbar-icons" /></li>
            <li><TwitterIcon className="Navbar-icons" /></li>
          </ul>
        </div>
      </div>

      <nav className="header-nav">
        <img src={logo} alt="Logo" className="mobile-logo" />
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseIcon className="close-icon menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <ul className={`navb-items ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>
              HOME
            </NavLink>
          </li>

          {Object.keys(dropdownItems).map((menu, index) => (
            <li key={index} onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={handleMouseLeave}>
              <span className="dropdown-toggle">{menu} <ArrowDropDownIcon className="arrow-icon" /></span>
              {activeDropdown === menu && (
                <div className="dropdown">
                  {dropdownItems[menu].map((item, idx) => (
                    <NavLink key={idx} to={item.to} onClick={closeMobileMenu}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <NavLink to="/services" onClick={closeMobileMenu}>
              SERVICES
            </NavLink>
          </li>

          <li>
            <NavLink to="/Assistance" onClick={closeMobileMenu}>
            ASSISTANCE
            </NavLink>
          </li>

          <li>
            <NavLink to="/blogs" onClick={closeMobileMenu}>
              BLOGS
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us" onClick={closeMobileMenu}>
              CONTACT US
            </NavLink>
          </li>
        </ul>
        <button className="enquire-btn" onClick={toggleForm}>Free Consultation</button>
      </nav>
    </header>
  );
};

export default Header;
