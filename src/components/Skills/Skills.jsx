import Marquee from "react-fast-marquee";
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
    <Marquee speed={50} gradient={false}>
      {iconsArray.map((icon) => (
        <img
          key={icon.name}
          src={icon.url}
          alt={icon.name}
          style={{ height: "50px", marginRight: "40px" }}
        />
      ))}
    </Marquee>
  );
};

export default Skills;
