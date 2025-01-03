"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "./../assests/proj1.jpg";
import project2 from "./../assests/proj2.jpg";
import project3 from "./../assests/proj4.jpg";

const projects = [
  {
    title: "E-commerce Website",
    desc: "A fully functional e-commerce platform with product listings, shopping cart, and checkout functionality.",
    devStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://example-ecommerce.com",
    git: "https://github.com/user/ecommerce-repo",
    src: project1,
  },

  {
    title: "Task Management App",
    desc: "A web application for managing tasks and projects, with features like task assignment, deadlines, and progress tracking.",
    devStack: "Angular, TypeScript, Firebase",
    link: "https://example-task-app.net",
    git: "https://github.com/user/task-management",
    src: project2,
  },

  {
    title: "Personal Portfolio Website",
    desc: "A showcase of my skills and projects, built with modern web technologies.",
    devStack: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://my-portfolio.dev",
    git: "https://github.com/user/my-portfolio",
    src: project3,
  },
];
function Portfolio() {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>
      <div className="max-w-[1200px] mx-auto space-y-24 px-6 md:px-0">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex ${
              index % 2 === 1
                ? "flex-col md:flex-row-reverse gap-12"
                : "flex-col md:flex-row gap-12"
            }`}
          >
            <div className="max-w-[550px] space-y-2">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-500 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[20px] bg-gray-400 my-4">
                <a href={project.link} className="mr-4">
                  link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <Image
                src={project.src}
                alt="project_image"
                className="h-[400px] w-auto rounded border border-gray-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
