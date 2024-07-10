import { CONTACT_DETAILS } from '../../constants';
import LinkButton from '../utils/LinkButton';

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
          className="bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 rounded-lg transition-all duration-150 space-y-5 text-center"
        >
          <h6>{platform}</h6>
          <address className="">{address}</address>
          <div>
            <LinkButton
              variant="accent"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </LinkButton>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactDetails;
