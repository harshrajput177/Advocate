import React  from 'react';  
import '../Contact-Page/ContactPage.css';
import { motion } from "framer-motion";
import Comp1  from  '../../Component/Blogs/Blog_1';
import Comp2 from '../../Component/Blogs/Blog_3';
import Comp3 from '../../Component/Blogs/Blog_4';

function ContactUs(){

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

return (
    <div className="BlogPage-content">
     <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>
    </div>
  
)
}

export default ContactUs ;