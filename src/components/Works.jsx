import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 500,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full  h-[230px]">
          <img
            src={image}
            className="w-full h-full object-contain rounded-2xl hover:scale-x-110 transition-all"
            alt=""
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(`${source_code_link}sangminoo`, "_blank")
              }
              className="black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            >
              <img src={github} className="w-1/2 h-1/2 object-contain" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 text-secondary">
          <h3 className="font-bold text-white text-xl">{name}</h3>
          <p className="text-justify italic text-[16px]">{description}</p>
          <div className="flex flex-wrap gap-2 mt-5"> 
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} `}>#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>My work</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", 0.1, 1)}
          className="mt-3 text-secondary text-lg max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quidem voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam quidem voluptatibus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam quidem voluptatibus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem
          voluptatibus
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((proj, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
