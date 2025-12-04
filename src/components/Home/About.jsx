import React from "react";
import SectionTitle from "../SectionTitle";
import Ashraf from "../../assets/Ashraf.webp";
import { motion } from "framer-motion";
const About = ({ styleSection }) => {
  return (
    <section className={styleSection}>
      <SectionTitle name={"About "} span={"Me"} />
      <div className="container px-[20px]  mx-auto flex flex-col md:flex-row  items-center justify-between gap-10 mt-10">
        <motion.div
          initial={{ x: -100, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full text-center md:text-left flex flex-col gap-4"
        >
          <h2 className="text-[1.8rem] font-bold  text-[#1B3C53]">
            Ashraf Hatem
          </h2>
          <span className="text-[1rem] font-bold">
            Graphic Designer & Content Creator (Reels & Videos){" "}
          </span>
          <p className="text-gray-600 text-[1.1rem] leading-7  mt-3 ">
            I'm Ashraf Hatem, a graphic designer with one year of experience in
            digital content creation. I specialize in graphic design and
            short-form video production (Reels), with a strong focus on
            delivering creative concepts that meet clients' needs across various
            industries. I've worked on numerous successful projects, including
            logo design, marketing materials, and high-quality video content for
            brands across social media platforms like Instagram and Facebook. If
            you're looking for someone to create innovative designs and
            captivating content that boosts your digital presence, I'm here to
            turn your ideas into reality.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className=" w-full flex md:justify-end justify-center"
        >
          <img
            loading="lazy"
            src={Ashraf}
            alt="error img"
            className="w-[500px] h-[700px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
