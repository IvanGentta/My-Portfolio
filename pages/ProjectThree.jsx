import Image from "next/image";
import React from "react";
import ImgProjectThree from "../public/assets/proyectoKrooma.JPG";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../translations/projectThree/en.json";
import es from "../translations/projectThree/es.json";

const ProjectThree = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ImgProjectThree}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] rigth-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h3 className="text-white text-3xl">{translation.title}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>{translation.project}</h2>
          <h3>{translation.overview}</h3>
          <p>{translation.text}</p>
          <a
            href="https://krooma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold text-[#004aad]">
              {translation.techs}
            </p>
            <div>
              {/* alt+16 = ► */}
              <p>► ReactJS </p>
              <p>► TailwindCSS </p>
              <p>► NodeJS </p>
              <p>► Figma </p>
              <p>► Gitlab </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">{translation.back}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectThree;
