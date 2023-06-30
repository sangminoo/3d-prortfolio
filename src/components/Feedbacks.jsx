import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5, 0.75)}
      className="bg-black p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-bold text-6xl">"</p>
      <div className="mt-1">
        <p className="text-white italic text-justify">{testimonial}</p>
        <div className="mt-7 flex justify-center items-center gap-1 text-white">
          <div className="flex-1 flex flex-col">
            <p>
              {" "}
              <span className="blue-text-gradient mr-[1px]">@</span>
              {name}
            </p>
            <p className="text-secondary text-[14px]"> {company}</p>
          </div>
          <div>
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.heroHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
