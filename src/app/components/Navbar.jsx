"use client";
import Link from "next/link";

import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import path from "path";
import { ul } from "framer-motion/client";

const navlink = [
  {
    title: "About",
    path: "/about",
  },
  { title: "Portfolio", path: "/portfolio" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    close: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };
  return (
    <div className="text-white/70 pt-6">
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px] ">
        <ul className="flex flex-row space-x-8 p-4">
          {navlink.map((item, index) => (
            <li className="text-white" key={index}>
              <p>
                <Link href={item.path}>{item.title}</Link>
              </p>
            </li>
          ))}

          <li>
            <a href="#contact">
              <h1 className="text-lg font-bold text-white/70 cursor-pointer">
                Contact Me
              </h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 bg-orange-400 rounded-full"></div>
                <div className=" mt-1 absolute w-1/3 h-1 bg-orange-800 rounded-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border-rounded border-white/70 p-2 text-white/70 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <motion.div
        initial={false}
        animate={nav ? "open" : "close"}
        variants={menuVariants}
        className="fixed left-0 top-0 bg-black/90 w-full h-auto"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navlink.map((item, index) => (
            <li key={index}>
              <Link onClick={closeNav} href={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
