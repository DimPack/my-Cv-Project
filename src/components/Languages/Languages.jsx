import "./Languages.sass";

const Languages = ({ languages }) => {
  const { title, items } = languages;
  return (
    <div className="languages">
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>
      {items.map((lang, idx) => (
        <div key={idx}>
          <h3>{lang.language}</h3>
          <p>{lang.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
