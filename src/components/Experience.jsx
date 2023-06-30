import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { backInOut, motion } from "framer-motion";
import { styles } from "../styles";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  const [isSeeAll, setIsSeeAll] = useState(false);
  console.log(isSeeAll);
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center animate-pulse">
          <img src={icon} alt="" className="w-[60%] h-[60%]  object-contain " />
        </div>
      }
    >
      <span className="text-xl font-extrabold">{title}</span>
      <div className="collapse ">
        <input type="checkbox" />
        <div
          className="collapse-title text-xl font-medium   p-0 m-0"
          onClick={() => setIsSeeAll(true)}
        >
          <p>
            {company_name}{" "}
            <span className="italic text-secondary">
              (Click to view more or close)
            </span>
          </p>
        </div>
        <ul className="collapse-content p-0 mt-5 ml-5 space-y-2 list-disc ">
          {points?.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-justify text-[16px] tracking-wide pl-1"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>What I have done so far</p>
        <h2 className={styles.heroHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
