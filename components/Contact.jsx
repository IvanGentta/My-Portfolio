import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../translations/contact/en";
import es from "../translations/contact/es";

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div id="contact" className="w-full">
      <div className="m-auto px-2 py-16 w-full">
        <h3 className="py-2">{translation.contact}</h3>
        <h1 className="py-2">{translation.touch}</h1>
        <div className="grid col-span-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-3 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="Persona usando una tablet"
                />
              </div>
              <div>
                <h2 className="pt-2 text-[#004aad] text-lg">Iván Gentta</h2>
                <p>{translation.frontEnd}</p>
                <p className="py-6 underline">{translation.jobSearch}</p>
              </div>
              <div>
                <p className="tracking-widest text-[#004aad] pt-8">
                  {translation.connect}
                </p>
                <div>
                  <div className="flex items-center justify-between md:justify-around m-auto pt-4">
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
          </div>
          <div className="col-span-2 w-full h-auto shadow-xl shadow-gray-700 rounded-xl p-6">
            <div className="">
              <form
                rel="noreferrer"
                method="POST"
                action="https://getform.io/f/a6e1aaa3-6d74-4c75-ae93-67b6b0a33377"
              >
                <div className="flex flex-col py-2">
                  <label className="py-2">{translation.name}</label>
                  <input
                    name="name"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2">EMAIL</label>
                  <input
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2">{translation.subject}</label>
                  <input
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-4">
                  <label className="py-2">{translation.message}</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={7}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 my-4">
                  {translation.send}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="sombra-icon p-3">
              <HiOutlineChevronDoubleUp className="text-[#004aad]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
