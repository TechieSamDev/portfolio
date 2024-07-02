import { CONTACT_DETAILS } from '../../constants';

const ContactDetails = () => {
  let REQUIRED_CONTACT = ['email', 'linkedin', 'whatsapp'];
  REQUIRED_CONTACT = REQUIRED_CONTACT.map(
    (details) => CONTACT_DETAILS[details]
  );
  return (
    <ul className="space-y-5">
      {REQUIRED_CONTACT.map(({ platform, address, link }) => (
        <li
          key={platform}
          className="border p-5 bg-secondary rounded space-y-5"
        >
          <h6 className="border">{platform}</h6>
          <address className="border">{address}</address>
          <div className="text-center">
            <a href={link} target="_blank" rel="noreferrer" className="border">
              Send Message
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactDetails;
