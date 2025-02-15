import React  from 'react';  
import '../AboutM&V-Page/AboutMis&Vis.css';
import { motion } from "framer-motion";
import Comp1  from  '../../Component/AboutM&V/AboutM1';
import Comp2 from '../../Component/AboutM&V/AboutM2';
import Comp3 from '../../Component/AboutM&V/AboutM3';

function AboutMis_Vis(){

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

return (
    <div className="AboutMisVis-content">
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

export default AboutMis_Vis ;