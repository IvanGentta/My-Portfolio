import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../translations/projectItem/en";
import es from "../translations/projectItem/es";

const ProjectItem = ({ title, backgroundImg, projectUrl, info }) => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl p-4 group hover:bg-gradient-to-br from-[#004aad] to-[#6d00ad]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        width="650"
        height="450"
      />
      {/* Se mueve manualmente luego de hacerlo absolute ↓↓ */}
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-white text-2xl tracking-widest text-center">
          {title}
        </h2>
        <p className="text-white text-md text-center py-2">{info}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer">
            {translation.information}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
