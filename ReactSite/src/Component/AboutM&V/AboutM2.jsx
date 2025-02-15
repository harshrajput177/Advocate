import React, { useEffect } from "react";
import  Vision  from '../../image/WhatsApp Image 2025-02-08 at 19.13.31_f534b608.jpg';
import '../../Styles/AboutMIS_VIS/AboutM2.css';
// import useScrollToSection from "../Hook/CustomHook2";

function AboutC4(){

    //   useScrollToSection();

    return(
   <div  className="bc-contents">
         <div id='Vision-section' className="bc-con">
        <div className="sc-con">
        <h1  className="text-C4-h1">
        <span className="black-text_C4">OUR</span> 
        <span className="blue-text_C4">  VISION</span>
        </h1>
        <p>
        Our vision is to be a trusted pillar of justice, ensuring that every individual has access to fair, transparent, and effective legal representation. We strive to uphold the principles of law with integrity, professionalism, and dedication, making legal support accessible to those in need. Our goal is to create a society where justice is not a privilege but a fundamental right, and where every client feels empowered and secure in their legal journey.
        </p>
        <p>
        As legal professionals, we envision a legal system that is progressive, inclusive, and free from bias. We aim to be at the forefront of legal innovation, adapting to the changing dynamics of the judiciary and continuously evolving our practice to provide the most effective legal solutions. We aspire to build a reputation of trust, excellence, and ethical practice, making a lasting impact in the legal profession and the communities we serve.
        </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="Business Illustration" />
        </div>
      </div>
   </div>
    )
    
}

export default AboutC4;