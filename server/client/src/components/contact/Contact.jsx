// ContactSection.js

import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const ContactSection = () => {
  return (
    <div className="bg-white bg-opacity-25 text-slate-950 py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Social Media Links */}
      <div className="flex items-center mb-4 md:mb-0">
        <a href="#" className="mr-4 text-blue-500">
          <FaFacebook className="text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="mr-4 text-blue-400">
          <FaTwitter className="text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="mr-4 text-pink-500">
          <FaInstagram className="text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="#" className="text-blue-400">
          <FaLinkedin className="text-lg" />
        </a>
      </div>

      {/* Middle: Contact Information */}
      <div className="flex items-center mb-4 md:mb-0">
        <HiOutlinePhone className="text-blue-500 text-lg mr-2" />
        <span className="mr-4">0792755901</span>
      </div>

      {/* Right side: Email and Search Icon */}
      <div className="flex items-center">
        <HiOutlineMail className="text-blue-500 text-lg mr-2" />
        <span className="mr-4">medplus@gmail.com</span>
        <RiSearchLine className="text-blue-500 text-lg" />
      </div>
    </div>
  );
};

export default ContactSection;
