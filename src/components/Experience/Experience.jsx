import "./Experience.sass";
const Experience = ({ experiences }) => {
  const { title, items } = experiences;

  return (
    <div className="experience">
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>

      {items.map((exp, idx) => (
        <div key={idx} className="experience-block">
          <div className="experience-date">
            <p>{exp.startDate}</p>
            <p>-</p>
            <p>{exp.endDate}</p>

          </div>
          <div className="experience-info">
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <ul className="experience-list">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
