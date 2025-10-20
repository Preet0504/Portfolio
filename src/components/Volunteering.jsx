import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { volunteering } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const VolunteeringCard = ({ activity }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "2px solid #E91E63",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #E91E63" }}
      date={activity.date}
      iconStyle={{ 
        background: 'linear-gradient(135deg, #E91E63 0%, #915EFF 100%)',
        boxShadow: '0 0 20px rgba(233, 30, 99, 0.5)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center'>
            <span className='text-white font-bold text-2xl'>
              {activity.organization.charAt(0)}
            </span>
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent'>
          {activity.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {activity.organization}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {activity.points.map((point, index) => (
          <li
            key={`volunteering-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Volunteering = () => {
  return (
    <section aria-labelledby="volunteering-heading">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Giving back to the community
        </p>
        <h2 id="volunteering-heading" className={`${styles.sectionHeadText} text-center`}>
          Volunteering & Leadership.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {volunteering.map((activity, index) => (
            <VolunteeringCard
              key={`volunteering-${index}`}
              activity={activity}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Volunteering, "volunteering");
