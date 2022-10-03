import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h3 className="py-2">SKILLS</h3>
        <h1 className="pb-10">What I know</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="m-auto">
                <Image
                  src="/assets/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>HTML</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>CSS</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>REACT</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>TAILWIND</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/node.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>NODE</h2>
            </div>
          </div>

          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/github.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>GITHUB</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/gitlab.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>GITLAB</h2>
            </div>
          </div>
          <div className="p-6 sombra">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/java.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <h2>JAVA</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
