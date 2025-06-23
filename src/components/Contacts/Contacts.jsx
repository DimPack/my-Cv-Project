import phoneIcon from "../../assets/phone.svg";
import letterIcon from "../../assets/envelope.svg";
import locationIcon from "../../assets/location.svg";
import planetIcon from "../../assets/planet.svg";
import "./Contacts.sass";
const Contacts = ({ personalInfo }) => {
  const { phone, email, location, title, avatar } = personalInfo;
  return (
    <div className="contacts">
        <img className="avatar" src={avatar} alt="Avatar" />
      <div className="title-block">
        <img className="title-icon" src={planetIcon} alt="planet Icon" />
        <h2 className="title">{title}</h2>
      </div>
      <div className="contacts-block">
        <img className="phone-icon" src={phoneIcon} alt="Phone Icon" />
        <p>{phone}</p>
      </div>
      <div className="contacts-block">
        <img className="phone-icon" src={letterIcon} alt="Letter Icon" />
        <p>{email}</p>
      </div>
      <div className="contacts-block">
        <img className="phone-icon" src={locationIcon} alt="Location Icon" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Contacts;
