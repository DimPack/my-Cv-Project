import "./Position.sass";
const Position = ({ position }) => {
  const { title, description } = position;
  return (
    <div className="position">
      <div className="title-block">
        <span className="title name-author">{title}</span>
      </div>
        <p className="specialty">{description}</p>
    </div>
  );
};

export default Position;
