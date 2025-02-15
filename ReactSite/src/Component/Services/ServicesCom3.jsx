import React, { useEffect, useRef } from "react";
import "../../Styles/Services-CSS/ServicesCom3.css";
import Header from "../Services/Header";
import image1 from '../../image/CivilLaw.jpg';
import image2 from '../../image/CriminalLaw.jpg';
import image3 from '../../image/CorporateLaw.jpg';
import image4 from '../../image/ai-generated-family-law-figure-of-parents-with-children-scales-and-gavel-on-wooden-table-photo.jpg';
import image5 from '../../image/law.jpg';
import image6 from '../../image/Labourimage.jpg';
import image7 from '../../image/InLaw.jpg';
import image8 from '../../image/TAXimage.jpg';
import image9 from '../../image/Bankimage.jpg';   
import image10 from '../../image/CYBERIMAGE.jpg';  
import image11 from '../../image/ENVimage.jpg';   


const sections= [
  {
    title: "Civil Law",
    description: " We provide legal assistance in civil disputes, including property conflicts, breach of contracts, tort claims, and personal injury cases. Our team ensures fair resolution through negotiation, mediation, or court representation.",
    image: image1, // Replace with actual image paths,
    id:""
  },
  {
    title: "Criminal Law",
    description: "Our criminal law services include defense against charges, bail applications, and trial representation. We protect clients’ rights, ensuring a strong defense in cases of fraud, assault, theft, and other criminal offenses..",
    image: image2,
     id:""
  },
  {
    title: "Corporate Law",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image3,
     id:""
  },
  {
    title: "Family Law",
    description: "We provide compassionate legal assistance in family matters, including divorce, child custody, alimony, domestic violence cases, adoption, and inheritance disputes. Understanding the sensitive nature of family conflicts, we aim for amicable solutions while ensuring our clients’ rights and interests are safeguarded. .",
    image:image4,
     id:""
  }, 
  
  {
    title: "Property & Real Estate Law",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image5,
     id:""
  },

   {
    title: "Employment & Labor Law",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image6,
     id:""
  }, 

   {
    title: "Intellectual Property Law ",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image7,
     id:""
  },
  {
    title: 'Taxation Law',
    description: "Our taxation law services include tax planning, GST compliance, corporate tax advisory, income tax return filing, and handling disputes with tax authorities. We assist businesses and individuals in understanding and complying with taxation laws while minimizing tax liabilities through strategic legal planning. Our expert representation ensures favorable resolutions in tax litigation and assessments.",
    image: image8,
     id:""
  },
  {
    title: "Banking & Finance Law",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image9,
     id:""
  },

  {
    title: 'Cyber Law',
    description: "In the digital age, cybercrime has become a significant concern. Our cyber law services cover cyber fraud, data breaches, digital defamation, hacking incidents, and IT Act compliance. We assist individuals and businesses in securing their digital assets, taking legal action against cybercriminals, and ensuring adherence to online security laws and regulations.",
    image: image10,
     id:""
  },
  {
    title: "Environmental Law",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image11,
     id:""
  },

];

function LabsPage() {
  const labRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("Facilities-show");
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    labRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      labRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  function SectionCard({ title, description, image }) {
    return (
      <div className="LabPage-section-card">
        <div className="LabPage-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
       <section  className="CBSE-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="LabPage-section-image" />
       </section>
      </div>
    );
  }
  
  return (
    <div className="LabPage-app-container">
        <Header />
      {sections.map((sec, index) => (
        <SectionCard
          key={index}
          id={sec.id}
          title={sec.title}
          description={sec.description}
          image={sec.image}
          buttonText={sec.buttonText}
        />
      ))}
    </div>
  );
}
export default LabsPage;