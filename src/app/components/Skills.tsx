"use client";

import { div } from "framer-motion/client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const skillisons = [
  {
    icon: <FaHtml5 size={140} />,
    label: "HTML",
  },
  {
    icon: <FaCss3 size={140} />,
    label: "CSS",
  },
  {
    icon: <FaJs size={140} />,
    label: "Js",
  },
  {
    icon: <FaReact size={140} />,
    label: "React",
  },
];

function Skills() {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="md:max-w-[900px] md:w-[900px] w-[400px] mx-auto text-white">
        <h2 className="text-6xl font-bold text-center mb-4">
          What <span className="text-orange-400">I Do</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillisons.map((skill, index) => (
            <div
              key={index}
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
