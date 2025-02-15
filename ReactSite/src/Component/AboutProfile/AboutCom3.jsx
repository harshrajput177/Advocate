import React, { useEffect } from "react";
import  Vision  from '../../image/AboutImg.jpg';
import '../../Styles/About-CSS/AboutCom3.css';
// import useScrollToSection from "../Hook/CustomHook2";

function AboutC4(){

    //   useScrollToSection();

    return(
   <div  className="bc-contents">
         <div id='Vision-section' className="bc-con">
        <div className="sc-con">
        <h1  className="text-C4-h1">
       About
       Us
        </h1>
        <p>
Rajrani Choudhary is a renowned and trusted legal firm based at the Patna High Court, dedicated to justice and legal security. Our founder, Advocate Rajrani Choudhary, is an experienced lawyer with expertise in litigation, corporate law, family disputes, and criminal defense.

Our firm operates as a single-window legal solution provider, offering comprehensive and extensive legal services to clients. Our goal is to provide the best possible solutions for every client through integrity, transparency, and competent representation.

We have a strong team of experienced lawyers, legal advisors, and paralegals who meticulously analyze each case and devise tailor-made legal strategies for every client. Our specialized team is trained in various areas such as civil, criminal, corporate, tax, and compliance laws, which sets us apart from other law firms.

The success of our firm and the satisfaction of our clients are our identity. We have successfully provided legal representation and guidance in matrimonial cases, corporate disputes, bail matters, cheque bounce cases, service matters, and other high-stakes legal matters.

We believe in building trustworthy, empathetic, and dedicated relationships with each client, reflecting our commitment to legal protection and justice. Our clients range from business entities, multinational corporations, and startups to individuals, public institutions, and government bodies, which has enabled us to establish a strong and diversified international presence.


        </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="Image" />
        </div>
      </div>
<div className="bottom-paragrapgh-div">
     <p className="bottom-paragraph">
     Our Specialties:
     </p>
<span>
✅ Comprehensive Legal Solutions – A specialized team for all types of civil, criminal, corporate, and taxation cases.
</span>

<span>
✅ Client-Centric Approach – Personal attention and customized legal solutions for every client's case.
</span>
<span>
    
✅ Proven Track Record – Years of experience in high-profile cases and successful litigation.
</span>
<span>
    
✅ Integrity & Trust – Clear and honest legal representation that protects the interests of every client.
</span>
     </div>
   </div>
    )
    
}

export default AboutC4;