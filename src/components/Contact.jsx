import React, { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { fadeIn, slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const regex = /\S+@\S+\.\S+/.test(value);
      if (regex) {
        setError(false);
      } else {
        setError(true);
      }
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    // 3G-Xa7DAsGNJTuGYJ
    // template_qdarmzh
    // service_yq6oqnq

    emailjs
      .send(
        "service_22kl73q",
        "template_b4xq21e",
        {
          from_name: form.name,
          to_name: "Sang",
          from_email: form.email,
          message: form.message,
        },
        "3G-Xa7DAsGNJTuGYJ"
      )
      .then(
        () => {
          setLoading(false);
          setAlertSuccess(true);

          setTimeout(() => {
            setAlertSuccess(false);
          }, 5000);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert("Error. Please try again later");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        {alertSuccess && (
          <motion.div variants={slideIn("top", "tween", 0.2, 1)}>
            <div className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Thanks you. I will get back to you as soon as possible!
                Notification will automatically close after{" "}
                <span className="countdown">
                  <span style={{ "--value": 5 }}></span>
                </span>{" "}
                seconds
              </span>
            </div>
          </motion.div>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="text-white font-medium mb-0">Your Name</label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium
            "
          />
          <label className="text-white font-medium mb-0">Your Email</label>
          <>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium
              "
            />
            {error && (
              <div className="badge badge-error gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current shrink-0 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Email invalid. Please check again!
              </div>
            )}
          </>

          <label className="text-white font-medium mb-0">Your Message</label>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium
            "
          />

          <button
            type="submit"
            className={`${error ? "btn-disabled" : "btn-neutral"}
            btn w-fit px-8 py-3 text-white flex items-center justify-center
            `}
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 text-center xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
