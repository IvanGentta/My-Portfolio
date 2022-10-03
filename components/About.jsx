import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center px-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="py-2">ABOUT</h3>
          <h1 className="py-2">Who am I</h1>
          <p className="py-2">
            My name is Iván Ariel Gentta, I&apos;m from Argentina. I&apos;ve
            worked for 6 years as a chef, so I learn to be a very punctual, tidy
            and responsible person and to always work as a team.
          </p>
          <p>
            Recently I got cautivated by programming. I&apos;ve been studying by
            my own since December 2021, I started learning Java, and then
            switched to front-end. I&apos;m always trying to learn something
            new. I&apos;m currently studying the full-stack major.
          </p>
        </div>
        <div className="w-full h-auto m-auto sombra flex items-center justify-center p-4 ">
          <Image
            className="rounded-xl"
            src="/assets/ivi foto.png"
            alt="Logotipo Iván"
            width="3879"
            height="5184"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
