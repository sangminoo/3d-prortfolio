import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `I'm a developer front-end. This is a little project about 3D visuals :))`,
      ],
      typeSpeed: 20,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: true,
      loopCount: 1,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="max-w-[800px]">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Sang Mino</span>
          </h1>
          <span ref={el} className={`${styles.heroSubText} mt-2 text-white `} />
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center mx-auto">
        <a href="#about" alt="" className=" ">
          <div className=" w-[35px] h-[64px] rounded-2xl border-[3px] border-secondary flex justify-center items-start p-2 animate-bounce  ">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        <a href="#about" alt="" className=" cursor-pointer text-secondary font-bold text-lg font-sans animate-bounce -tracking-tighter">Scroll</a>
      </div>
    </section>
  );
};

export default Hero;
