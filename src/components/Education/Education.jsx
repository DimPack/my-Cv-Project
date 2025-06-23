import "./Education.sass";
import "../../index.sass";
const Education = ({ education }) => {
  const { title, items } = education;
  return (
    <div>
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>
        {items.map((edu, idx) => (
            <div key={idx}>
            <h3>{edu.institution}</h3>
            <p>
                {edu.degree} ({edu.startDate} - {edu.endDate})
            </p>
            </div>
        ))}
    </div>
  );
};

export default Education;
