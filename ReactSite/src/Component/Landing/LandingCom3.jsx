import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/LandingCom3.css";

const services = [
  {
    title: "Civil Law",
    description:
      "Expert legal assistance in civil disputes, including property matters, contract issues, and personal rights protection.",
  },
  {
    title: "Family Law",
    description:
      "Comprehensive support in family legal matters such as divorce, child custody, alimony, and domestic disputes.",
  },
  {
    title: "Traffic Offences",
    description:
      "Professional representation for traffic violations, license suspensions, DUI cases, and other related matters.",
  },
  {
    title: "Property Law",
    description:
      "Legal guidance in property transactions, land disputes, ownership rights, and real estate agreements.",
  },
  {
    title: "Court Marriage",
    description:
      "Assistance in legal marriage procedures, documentation, and compliance with court requirements.",
  },
  {
    title: "Criminal Law",
    description:
      "Defense in criminal cases, including assault, theft, fraud, and other serious legal matters.",
  },
 
];

const LegalServices = () => {

  const navigate = useNavigate(); 

  return (
    <div className="LandingCom3-container">
      <h2>Legal Services</h2>
      <p className="LandingCom3-description">
        We provide expert legal services across various domains, ensuring our clients receive the best legal
        representation and guidance. Our team of experienced lawyers specializes in civil law, family disputes,
        property matters, court marriages, and more. We are committed to delivering justice and safeguarding your legal rights.
      </p>
      <div className="LandingCom3-services">
        {services.map((service, index) => (
          <div key={index} className="LandingCom3-service-card">
            <div className="LandingCom3-service-title">
              <span className="LandingCom3-check-icon">✔</span>
              {service.title}
            </div>
            <p className="LandingCom3-service-description">{service.description}</p>
            <button className="LandingCom3-button"  onClick={() => navigate('/services')}>Read More</button>
          </div>
        ))}
      </div>
      <button className="LandingCom3-View-All-Button"  onClick={() => navigate('/services')}>View All</button>
    </div>
  );
};

export default LegalServices;
