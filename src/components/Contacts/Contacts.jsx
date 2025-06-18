import phoneIcon from "../../assets/phone.svg";
import letterIcon from "../../assets/envelope.svg";
import locationIcon from "../../assets/location.svg";
import './Contacts.sass';
const Contacts = ({ personalInfo }) => {
  const { phone, email, location } = personalInfo;
  return (
    <div className="contacts">
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
