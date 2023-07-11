import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="h-16 w-full bg-slate-500 mt-8 flex justify-around">
      <p className="flex items-center justify-center text-white">
        © {new Date().getFullYear()} Sebastián Marchetti
      </p>
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-pedro-marchetti/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600"
        >
          <AiFillLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/SebasUNLu"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-8 text-white hover:text-black"
        >
          <AiFillGithub className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
