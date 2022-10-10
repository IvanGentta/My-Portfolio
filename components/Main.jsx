import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import en from "../translations/main/en";
import es from "../translations/main/es";

const MainComponent = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-md tracking-widest">{translation.titulo}</p>
          <h1 className="pt-3">
            {translation.hi}
            <span className="text-[#004aad]">Iván</span>
          </h1>
          <h1 className="py-3">{translation.developer}</h1>
          <p className="text-md pt-3 max-w-[60%] m-auto">{translation.text}</p>
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
