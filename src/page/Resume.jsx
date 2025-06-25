import resumeData from "../data/resumeData.json";
import Contacts from "../components/Contacts/Contacts";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import Languages from "../components/Languages/Languages";
import Position from "../components/Position/Position";
import "./Resume.sass";
const Resume = () => {
  return (
    <div className="resume">
      <section className="sidebar">
        <Contacts personalInfo={resumeData.personalInfo} />
        <Languages languages={resumeData.languages} />
      </section>
      <section className="main">
        <Position position={resumeData.position} />
        <Experience experiences={resumeData.experiences} />
        <Education education={resumeData.education} />
        <Skills />
        <AboutMe aboutMe={resumeData.aboutMe} />
      </section>
    </div>
  );
};

export default Resume;
