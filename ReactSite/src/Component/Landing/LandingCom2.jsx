import React from "react";
import '../../Styles/LandingCom2.css';
import LawyerImg from '../../image/AboutImg.jpg';

const LawyerSection = () => {
  return (
    <div className="LandingCom2-lawyer-Container">
      <div className="case-count">
        <h3 className="number">79+</h3>
        <p>Successful Cases</p>
      </div> 
      {/* Left Side - Image */}
      <div className="LandingCom2-lawyer-section">
        <div className="LandingCom2-lawyer-image">
          <img src={LawyerImg} alt="Advocate Rajrani Choudhary" />
        </div>
        
        {/* Right Side - Content */}
        <div className="LandingCom2-lawyer-content">
          <h2>Experienced Legal Expertise at Patna High Court</h2>
          <p className="LandingCom2-subtitle">Dedicated to Justice & Client Advocacy</p>
          <p>
            Advocate **Rajrani Choudhary**, a seasoned legal professional at the **Patna High Court**, 
            specializes in litigation, contract law, client counseling, and legal research. With a commitment 
            to upholding justice, she provides strategic legal solutions tailored to individual and business needs.
          </p>
          <p>
            Her expertise includes representing clients in court, managing complex legal cases, 
            and offering sound legal advice on compliance and transactional matters.
          </p>
          <p>
            She has successfully handled **79+ cases**, ensuring justice through meticulous case preparation, 
            strong advocacy, and client-focused legal representation.
          </p>

          {/* Italicized Quote */}
          <blockquote>
            "Empowering clients with legal clarity, seamless advocacy, and unwavering dedication to justice."
          </blockquote>
          <p className="LandingCom2-Last-para">
            With extensive experience in **civil, criminal, corporate, and family law**, Advocate Rajrani Choudhary 
            continues to be a trusted name in legal excellence. Her approach prioritizes integrity, precision, and 
            achieving the best outcomes for her clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerSection;
