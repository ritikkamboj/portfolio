"use client";
import React from "react";
// import motion from frame
import { motion } from "framer-motion";
import Image from "next/image";
import icon1 from "./../assests/icon1.png";
import icon2 from "./../assests/icon2.png";
import profilepic from "./../assests/profilepic.png";

function Hero() {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute w-[2000px] h-[1300px]  top-[500px] left-[50%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center ">
          <h1 className="text-[#98B4CE]">HI I am </h1>
          <h1 className="text-[#E48A57]">Jon Doe</h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={icon1}
            height={150}
            width={150}
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute right-[220px] top-[20px]" drag>
          <Image
            src={icon2}
            height={160}
            width={160}
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto text-white/80">
          I am an Master Full Stack Developer
        </p>
        <Image
          src={profilepic}
          alt="sigma_male"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
