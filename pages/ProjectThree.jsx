import Image from "next/image";
import React from "react";
// import ImgProjectThree from "";
import Link from "next/link";

const ProjectOne = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          // src={ImgProjectThree}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] rigth-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h3 className="text-white text-3xl"></h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>PROJECT</h2>
          <h3>Overview</h3>
          <p></p>
          <button className="px-8 py-2 mt-4 mr-8">demo</button>
          <button className="px-8 py-2 mt-4">code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold text-[#004aad]">Technologies</p>
            <div>
              {/* alt+16 = ► */}
              <p>► </p>
              <p>► </p>
              <p>► </p>
              <p>► </p>
              <p>► </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectOne;
