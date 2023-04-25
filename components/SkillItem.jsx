import Image from "next/image";

const SkillItem = ({ title, img }) => {
  return (
    <div className="p-6 sombra">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="m-auto">
          <Image src={img} alt="/" width="64px" height="64px" />
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SkillItem;
