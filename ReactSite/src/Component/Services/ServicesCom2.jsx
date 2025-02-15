import React from "react";
import "../../Styles/Services-CSS/ServicesCom2.css";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function CommittieC2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Civil ", target: "Civil-section" },
    { label: "Criminal ", target: "Criminal-section" },
    { label: "Corporate ", target: "Corporate-section" },
    { label: "Family ", target: "Family-section" },
    { label: "Real Estate ", target: "Real-section" },
    { label: "Labor ", target: "Labor-section" },
    { label: "Intellectual Property ", target: "Intellectual-section" },
    { label: "Cyber  ", target: "Cyber-section" },  
    { label: "Environmental ", target: "Environmental-section" },
    { label: " Banking & Finance", target: " Banking-section" }
  
];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (targetId, index) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      setActiveIndex(index);
      setIsMobileMenuOpen(false); // Close the mobile menu
    }
  };

  return (
    <div className="CommitteC2-Ab-NAV">
      {/* Full-width menu for larger screens */}
      <div className="desktop-menu">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleScroll(link.target, index)}
            >
              <span className="CommitteC2-text-change">{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu with hamburger icon */}
      <div className="mobile-menu">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <MenuIcon />
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-content">
            <div className="close-icon" onClick={toggleMobileMenu}>
              <CloseIcon />
            </div>
            <ul className="menu-list">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => handleScroll(link.target, index)}
                >
                  <span className="text-change">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommittieC2;