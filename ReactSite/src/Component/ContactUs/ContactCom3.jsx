import React from 'react';
import '../../Styles/Contact-CSS/ContactCom3.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const ContactForm = () => {
  return (
    <div className="Contact-Box">
      <h2 className="contact-heading">Get In Touch With Us</h2>
      <p className="contact-subheading">
        Visit Us or get in touch with us to discuss more on giving your child the
        best and a deserving future
      </p>
      <div className="contact-wrapper">
        <div className="Contact-Us-Info">
          <h3>Contact Information</h3>
          <h4>Please fill the form and send us your details. We will get in touch with you shortly.</h4>
          <a href="">
          <p><LocalPhoneIcon  className='contact-Us-icon'/>+91 7827438218</p>
          </a>
          <a href="mlzsbihta@gmail.com">
          <p><EmailIcon  className='contact-Us-icon' />Advrajranichoudhary1711@gmail.com</p>
          </a>
         <a href="">
         <p><FmdGoodIcon  className='contact-Us-icon'/>Jinpura road, Bihta, Bihar 801103</p>
         </a>
         <a href="">
         <p><InstagramIcon  className='contact-Us-icon'/>
         Lets Connect  On Instagram</p>
         </a>
        <a href="">
        <p><FacebookIcon  className='contact-Us-icon'/>Follow Us On Facebook</p>
        </a>
          <a href="">
          <p><LinkedInIcon  className='contact-Us-icon'/>Connect Us On Linkdin</p>
          </a>

        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6327085634644!2d85.12287457614679!3d25.608897577427263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583f19555555%3A0x6d4c4f90b4050300!2sPatna%20High%20Court!5e0!3m2!1sen!2sin!4v1707451234567"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
       ></iframe>
      </div>

        <div class="background-container">
       <div class="circle circle1"></div>
        <div class="circle circle2"></div>
          </div>
        <div className="contact-form">
          <form>
            <div className="ConatctUs-form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="ConatctUs-form-row">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <textarea placeholder="Write your message..." required></textarea>
            <button type="submit" className="ContactUs-send-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;