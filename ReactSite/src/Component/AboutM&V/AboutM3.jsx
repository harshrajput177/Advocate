import  Vision  from '../../image/8777961.jpg';
import '../../Styles/AboutMIS_VIS/AboutM3.css';
// import useScrollToSection from "../Hook/CustomHook2";

function AboutC5(){
        //  useScrollToSection();

    return(
        <div id="Mision-section" className="b-con">
        <div className="s-con">
        <h1  className="text_About_C5">
        <span className="black-text_C5">OUR</span> 
        <span className="blue-text_C5">  MISSION</span>
        </h1>
    
        <p>
        Our mission is to provide exceptional legal services with integrity, professionalism, and dedication. We are committed to ensuring justice for all by offering strategic legal representation, personalized counsel, and transparent communication.
        We prioritize a client-centric approach, understanding their unique needs and guiding them through complex legal challenges with clarity and confidence. Ethical practice is the foundation of our work, ensuring fairness, honesty, and trust in every case we handle. 
        Our goal is to deliver excellence in advocacy, litigation, and legal consultancy by staying updated with evolving laws and legal precedents. We strive to empower individuals and businesses with legal knowledge, helping them make informed decisions and safeguard their rights.
        </p>

        </div>
        <div className="image">
          <img src={Vision} alt="Business Illustration" />
        </div>
      </div>
    )
    
}

export default AboutC5;