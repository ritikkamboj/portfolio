"use client";

import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-12 text-white/70 max-w-[1000px] mx-auto py-8 border-t border-gray-70 flex justify-between items-center px-6 md:px-0">
      <h1 className="text-2xl font-bold">John Doe </h1>
      <div className="flex space-x-6 mt-4">
        <a href="" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="" className="hover:text-gray-300">
          <FaTwitter size={24} />
        </a>
        <a href="" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
