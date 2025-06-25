import Marquee from "react-fast-marquee";
import "./Skills.sass";

const skillIcons = import.meta.glob("/src/assets/Skills/*.svg", {
  eager: true,
  import: "default",
});

const iconsArray = Object.entries(skillIcons).map(([path, url]) => {
  const name = path.split("/").pop().replace(".svg", "");
  return { name, url };
});

const Skills = () => {
  return (
    <div className="skills-container">
      <Marquee
        speed={50}
        gradient={false}
        className="skills-marquee"
      >
        {iconsArray.map((icon) => (
          <img
            key={icon.name}
            src={icon.url}
            alt={icon.name}
            title={icon.name}
            className="skill-icon"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
