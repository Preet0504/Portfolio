import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SkillBadge = ({ name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 }
      }}
      className='relative group'
    >
      <div className='bg-gradient-to-br from-purple-600 to-pink-600 p-[2px] rounded-xl'>
        <div className='bg-tertiary px-6 py-3 rounded-xl flex items-center justify-center min-w-[120px] h-[50px] relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
          <p className='text-white text-sm font-semibold text-center relative z-10'>
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section aria-labelledby="skills-heading">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 id="skills-heading" className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12'>
        {Object.entries(technologies).map(([category, techs]) => (
          <motion.div 
            key={category} 
            className='text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-white text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
              {category}
            </h3>
            <div className='flex flex-wrap justify-center gap-3'>
              {techs.map((technology, index) => (
                <SkillBadge 
                  key={technology.name} 
                  name={technology.name}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
