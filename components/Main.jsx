import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MainComponent = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-md tracking-widest">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="pt-3">
            Hi, My Name Is <span className="text-[#004aad]">Iván</span>
          </h1>
          <h1 className="py-3">I&apos;m A Front-End Web Developer</h1>
          <p className="text-md pt-3 max-w-[60%] m-auto">
            I&apos;m from Argentina. I specialize in building and designing
            responsive front-end web applications, with react.js. I&apos;m
            always trying to improve and acquire knowledge in my field, and at
            the moment I am learning Photoshop and back-end technologies to
            complement my existing technical foundation.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto pt-4">
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-ariel-gentta-117077231/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sombra-icon p-5">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/IvanGentta"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sombra-icon p-5">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=genttaivan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sombra-icon p-5">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-ariel-gentta-117077231/overlay/1635500907577/single-media-viewer/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sombra-icon p-5">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
