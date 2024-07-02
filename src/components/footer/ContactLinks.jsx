import { Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import { CONTACT_DETAILS } from '../../constants';

const ContactLinks = () => {
  return (
    <div className="">
      <a
        href={CONTACT_DETAILS.twitter.link}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <Twitter />
      </a>
      <a
        href={CONTACT_DETAILS.linkedin.link}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <LinkedIn />
      </a>
      <a
        href={CONTACT_DETAILS.github.link}
        rel="noreferrer"
        target="_blank"
        className="mx-2 rounded"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default ContactLinks;
