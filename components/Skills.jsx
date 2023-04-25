import { useRouter } from "next/router";
import en from "../translations/skills/en";
import es from "../translations/skills/es";
import SkillItem from "./SkillItem";
import imgHTML from "../public/assets/html.png";
import imgCSS from "../public/assets/css.png";
import imgJS from "../public/assets/javascript.png";
import imgReact from "../public/assets/react.png";
import imgNode from "../public/assets/node.png";
import imgExpress from "../public/assets/express.png";
import imgMongo from "../public/assets/mongoDB.png";
import imgTailwind from "../public/assets/tailwind.png";
import imgJava from "../public/assets/java.png";
import imgGithub from "../public/assets/github.png";
import imgGitlab from "../public/assets/gitlab.png";

const Skills = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en : es;

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h3 className="py-2">{translation.skills}</h3>
        <h1 className="pb-10">{translation.what}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <SkillItem title="HTML" img={imgHTML} />
          <SkillItem title="CSS" img={imgCSS} />
          <SkillItem title="JAVASCRIPT" img={imgJS} />
          <SkillItem title="REACT" img={imgReact} />
          <SkillItem title="NODE" img={imgNode} />
          <SkillItem title="EXPRESS" img={imgExpress} />
          <SkillItem title="MONGODB" img={imgMongo} />
          <SkillItem title="TAILWIND" img={imgTailwind} />
          <SkillItem title="JAVA" img={imgJava} />
          <SkillItem title="GITHUB" img={imgGithub} />
          <SkillItem title="GITLAB" img={imgGitlab} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
