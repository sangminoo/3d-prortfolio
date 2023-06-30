import  { useEffect, useRef, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`&nbsp; | DEVELOPERㅤ`, "™"],
      typeSpeed: 100,
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
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to={`/`}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-9 h-9 object-contain" alt="" />
          <p className="text-white font-bold text-2xl hover:text-red-500 hover:transition-all">
            SANG{" "}
            <span className="text-red-500 hover:text-white transition-all">
              M
            </span>
            INO 
            <span className="hidden sm:inline-flex" ref={el} />
          </p>
        </Link>
        <ul className="hidden list-none gap-10 sm:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }
                  hover:text-white text-lg font-bold transition-all 
                `}
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="transition-all sm:hidden flex flex-1 justify-end items-center">
          {" "}
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="transition-all  w-[28px] h-[28px] object-contain cursor-pointer
              
            "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
              <ul className="list-none flex flex-col justify-end items-start gap-4 transition-all ">
                {navLinks.map((link) => (
                  <li key={link.id} className="">
                    <a
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      }
                    hover:text-white text-lg font-medium transition-all font-poppins
                  `}
                      href={`#${link.id}`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(link.title)}}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
