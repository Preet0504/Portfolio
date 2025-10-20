import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={{ scale: 0, rotateX: -90 }}
      animate={{ 
        scale: 1, 
        rotateX: 0,
        y: [0, -8, 0],
        x: [0, 5, 0],
      }}
      transition={{
        scale: { duration: 0.6, ease: "backOut" },
        rotateX: { duration: 0.6, ease: "easeOut" },
        y: { 
          duration: 4 + index * 0.3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.6
        },
        x: { 
          duration: 4 + index * 0.3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.6
        },
      }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {icon && (
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
        )}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section aria-labelledby="about-heading">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 id="about-heading" className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a Computer Science student passionate about AI, cloud computing, and web development. 
        I love building scalable, data-driven solutions that tackle real-world problems, combining intelligent
        systems, distributed systems, and clean design to create applications that are both powerful and practical.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
