import "./AboutMe.sass";
const AboutMe = ({ aboutMe }) => {
  const { title, description } = aboutMe;
  return (
    <div className="about-me">
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>
        <div className="about-me-content">
            <p className="about-me-description">{description}</p>
        </div>
    </div>
  );
};

export default AboutMe;
