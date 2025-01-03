"use client";

import React from "react";
import phone from "./../assests/phone.png";
import mail from "./../assests/mail.png";
import Image from "next/image";

function Contact() {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 space-y-8 lg:space-x-8 lg:space-y-0"
      id="contact"
    >
      <div className="flex  justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center ">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-center text-xl">76387229</p>
          </li>
          <li className="flex items-center ">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-center text-xl">ritikkamboj414@g,ail.com</p>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 max-w-[550px] rounded-xl">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          let's Connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a Message and Let's schedule a Call
        </p>
        <form
          action="https://getform.io/f/axoopmyb"
          method="POST"
          className="space-y-4"
        >
          <div className=" flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
            <input
              name="fname"
              type="text"
              placeholder="First Name"
              className="bg-black/70 rounded-xl p-3 focus:ring-orange-400 focus:outline-none focus: ring-2"
            />
            <input
              name="lname"
              type="text"
              placeholder="Last Name"
              className="bg-black/70 rounded-xl p-3 focus:ring-orange-400 focus:outline-none focus: ring-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="bg-black/70 rounded-xl p-3 focus:ring-orange-400 focus:outline-none focus: ring-2"
            />{" "}
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="bg-black/70 rounded-xl p-3 focus:ring-orange-400 focus:outline-none focus: ring-2"
            />
          </div>
          <textarea
            placeholder="Your Message "
            className="bg-black/70 rounded-xl p-3 focus:ring-orange-400 focus:outline-none focus: ring-2 w-full resize-none"
          />
          <button className="bg-orange-700 hover:bg-orange-400 rounded-xl text-white px-5 py-2 w-full font-semibold text-xl">
            Button
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
