import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className='text-center'>
            <h3 className='text-white text-xl font-bold mb-6'>{category}</h3>
            <div className='flex flex-wrap justify-center gap-4'>
              {techs.map((technology, index) => (
                <div key={technology.name} className='flex flex-col items-center'>
                  <div className='w-20 h-20 mb-2'>
                    <BallCanvas icon={technology.icon} />
                  </div>
                  <p className='text-white text-sm text-center max-w-[80px] leading-tight'>
                    {technology.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Tech, "");
// r(Tech, "");
