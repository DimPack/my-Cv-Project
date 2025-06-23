import './Experience.sass';
import '../../index.sass';
const Experience = ({ experiences }) => {
  const { title, items } = experiences;

  return (
    <div className="experience">
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>

      {items.map((exp, idx) => (
        <div key={idx}>
          <h3>{exp.company}</h3>
          <p>
            {exp.position} ({exp.startDate} - {exp.endDate})
          </p>
          <ul className="experience-list">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
