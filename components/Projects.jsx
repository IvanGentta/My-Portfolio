import Image from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";
import ImgProjectOne from "/public/assets/project-weatherApp.png";
import ImgProjectTwo from "/public/assets/project-google.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h3 className="py-2">PROJECTS</h3>
        <h1 className="py-2">What I&apos;ve built</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={ImgProjectOne}
            projectUrl="/ProjectTwo"
            info="Web app to know what is the weather like in any place in the world"
          />
          <ProjectItem
            title="Google Search Clon"
            backgroundImg={ImgProjectTwo}
            projectUrl="/ProjectOne"
            info="A Google clon where you can actually search what you want"
          />
          <div
            className="relative flex items-center justify-center h-auto w-full shadow-xl
           shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-br 
           from-[#004aad] to-[#6d00ad]"
          >
            <Image
              className="rounded-xl group-hover:opacity-10"
              src="/assets/coding.png"
              width="650"
              height="450"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h2 className="text-white text-2xl tracking-widest text-center">
                I&apos;m always coding, so there will be more projects soon!
              </h2>
            </div>
          </div>
          {/*
          <ProjectItem
            title="Cuarto titulo"
            backgroundImg={ImgProjectOne}
            projectUrl="/"
            info="lorem"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
