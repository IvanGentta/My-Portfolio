import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import en from "../translations/navbar/en";
import es from "../translations/navbar/es";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f0f1e0");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const { locale } = router;
  const translation = locale === "en" ? en : es;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  useEffect(() => {
    if (
      router.asPath === "/ProjectOne" ||
      router.asPath === "/ProjectTwo" ||
      router.asPath === "/ProjectThree" ||
      router.asPath === "/ProjectFour"
    ) {
      setNavBg("transparent");
      setLinkColor("#f0f1e0");
    } else {
      setNavBg("#f0f1e0");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 120) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#f0f1e0]"
          : "fixed w-full h-20 z-[100] bg-[#f0f1e0]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 ">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/assets/IG Logotipo.png"
            alt="Logotipo Iván"
            width="75"
            height="75"
          />
        </Link>
        <div className="flex">
          <div className="mx-5">
            <select
              defaultValue={locale}
              onChange={changeLanguage}
              className="text-sm font-bold text-white uppercase cursor-pointer
            bg-[#5651e5] rounded-lg outline-none hover:scale-105 ease-in-out duration-100"
            >
              <option className="ml-10 text-sm font-bold" value="en">
                EN
              </option>
              <option className="ml-10 text-sm font-bold" value="es">
                ES
              </option>
            </select>
          </div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li
                id="/#home"
                className="ml-10 text-sm hover:border-b border-black"
              >
                {translation.home}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm hover:border-b border-black">
                {translation.about}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm hover:border-b border-black">
                {translation.skills}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm hover:border-b border-black">
                {translation.projects}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm hover:border-b border-black">
                {translation.contact}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] h-full bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/IG Logotipo.png"
                alt="/"
                width="87"
                height="87"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-6">
              <p className="py-3">{translation.codeAwesome}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul>
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translation.home}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translation.about}
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translation.skills}
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translation.projects}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {translation.contact}
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-[#004aad]">
                {translation.connect}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/iv%C3%A1n-ariel-gentta-117077231/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sombra-icon p-3">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/IvanGentta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sombra-icon p-3">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=genttaivan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sombra-icon p-3">
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/iv%C3%A1n-ariel-gentta-117077231/overlay/1635500907577/single-media-viewer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="sombra-icon p-3">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
