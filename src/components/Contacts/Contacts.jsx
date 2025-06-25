import phoneIcon from "../../assets/phone.svg";
import letterIcon from "../../assets/envelope.svg";
import locationIcon from "../../assets/location.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import "./Contacts.sass";
const Contacts = ({ personalInfo }) => {
  const { phone, email, location, linkedin, title, avatar } = personalInfo;
  return (
    <div className="contacts">
      <img className="avatar" src={avatar} alt="Avatar" />
      <div className="title-block">
        <h2 className="title">{title}</h2>
      </div>
      <div className="contacts-block">
        <a href={`tel:${phone}`} className="contacts-item">
          <img className="icon" src={phoneIcon} alt="Phone Icon" />
          <p>{phone}</p>
        </a>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-item"
        >
          <img className="icon" src={letterIcon} alt="Letter Icon" />
          <p>{email}</p>
        </a>
        <div className="contacts-item">
          <img className="icon" src={locationIcon} alt="Location Icon" />
          <p>{location}</p>
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-item"
        >
          <img className="icon" src={linkedinIcon} alt="Location Icon" />
          <p>www.linkedin.com</p>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
