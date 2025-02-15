import React from "react";
import "../../Styles/LandingCom5.css";

const WhyChooseUs = () => {
  return (
    <div className="LandingCom5-container">
      <h2 className="LandingCom5-heading">Why Choose Us?</h2>
      <div className="LandingCom5-content">
        <div className="LandingCom5-Paragrapgh">
          <p className="LandingCom5-description">
            With years of experience in the legal field, we specialize in handling complex litigation cases with precision, dedication, and a client-first approach.
          </p>
          <p className="LandingCom5-highlight">
            Our expertise lies in <strong>strategic legal solutions, unwavering commitment to justice, and personalized advocacy</strong>, ensuring the best possible outcomes for every case.
          </p>
        </div>
        <div className="LandingCom5-All-ul"> 
          <ul className="LandingCom5-list">
            <li>✅ Extensive experience in litigation, corporate, and family law matters.</li>
            <li>✅ Transparent communication and customized legal strategies for every client.</li>
            <li>✅ A proven record of success in high-stakes legal cases.</li>
          </ul>
        </div>
      </div>
      <div className="LandingCom5-cards">
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">⚖️</span>
          <h3>Comprehensive Legal Expertise</h3>
          <p>Proficient in handling civil, criminal, corporate, and family law cases with meticulous legal strategies.</p>
        </div>
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">🏆</span>
          <h3>Proven Track Record</h3>
          <p>Successfully represented numerous clients, ensuring justice through strong legal arguments and thorough case preparation.</p>
        </div>
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">🤝</span>
          <h3>Client-Centric Approach</h3>
          <p>Dedicated to providing personalized legal support, ensuring clarity, fairness, and a strong defense for every client.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
