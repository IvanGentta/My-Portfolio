import Image from "next/image";
import { useRouter } from "next/router";
import en from "../translations/about/en";
import es from "../translations/about/es";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div id="about" className="w-full md:h-screen flex items-center px-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="py-2">{translation.about}</h3>
          <h1 className="py-2">{translation.who}</h1>
          <p className="py-2">{translation.textOne}</p>
          <p>{translation.textTwo}</p>
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
