import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto items-center
    z-0"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500
      text-2xl"
      >
        Projects
      </h3>

      <div
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 
                     scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.shutterstock.com/image-photo/uk-march-2020-tv-television-260nw-1680823216.jpg"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} 0f {projects.length}:
                </span>{" "}
                E-Commerce Website
              </h4>

              <p className="text-lg text-center md:text-left">
                Personalized shirt design made effortless with AI-powered image
                search. This website will help you unleash creativity and find
                the perfect inspiration in seconds. Welcome to the future of
                custom shirts!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 
      h-[500px] -skew-y-12"
      />
    </motion.div>
  );
}

export default Projects;
