import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "2px solid #915EFF",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #915EFF" }}
      date={experience.date}
      iconStyle={{ 
        background: 'linear-gradient(135deg, #915EFF 0%, #E91E63 100%)',
        boxShadow: '0 0 20px rgba(145, 94, 255, 0.5)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center'>
            <span className='text-white font-bold text-2xl'>
              {experience.company_name.charAt(0)}
            </span>
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 id="experience-heading" className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
