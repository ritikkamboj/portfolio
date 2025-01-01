"use client";

import Image from "next/image";
import React from "react";
import book from "./../assests/book.png";
import pc from "./../assests/pc.png";
import card from "./../assests/card.png";
import finance from "./../assests/finance.png";

function About() {
  return (
    <div className="max-w-[1200px] mx-auto text-center" id="about">
      <div className="grid grid-cols-8 gap-6">
        <div className="col-span-5 bg-white/10 background-blur-lg border border-white/20 rounded-xl">
          <div className="absolute">jai baabe ki</div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-lg font-bold text-white/70 mt-2">XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white/10 background-blur-lg border border-white/20 rounded-xl">
          <div className="flex flex-row p-6">
            <Image src={pc} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem-Solving
              </h2>
              <p className="text-lg font-bold text-white/70 mt-2">XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-white/10 background-blur-lg border border-white/20 rounded-xl">
          <div className="flex flex-row p-6">
            <Image src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-lg font-bold text-white/70 mt-2">XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 bg-white/10 background-blur-lg border border-white/20 rounded-xl">
          <div className="flex flex-row p-6">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-lg font-bold text-white/70 mt-2">XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
