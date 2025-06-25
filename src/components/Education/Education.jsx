import "./Education.sass";
const Education = ({ education }) => {
  const { title, items } = education;
  return (
    <div className="education">
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>
      <div className="education-block">
        {items.map((edu, idx) => (
          <div key={idx} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p className="education-date">
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
