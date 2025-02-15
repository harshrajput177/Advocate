import React  from  'react';
import Contact1 from '../../image/vecteezy_handshake-after-good-cooperation_1308502.jpg';
import '../../Styles/Contact-CSS/ContactCom1.css';

function Contact(){
    return(
        <div className="Contact-container_2">
        <img src={Contact1} alt="Hero" className="hero-img_Contact" />
      </div>
    )
}

export default Contact;