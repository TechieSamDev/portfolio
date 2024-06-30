import {
  linkedinAddress,
  emailAddress,
  whatsappLink,
  twitterAddress,
} from '../../contact-links';

import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const CONTACT_DETAILS = [
  {
    platform: 'LinkedIn',
    address: `@${linkedinAddress.split('/').pop()}`,
    link: linkedinAddress,
    icon: '',
  },
  {
    platform: 'Email',
    address: `@${emailAddress.split(':').pop()}`,
    link: emailAddress,
    icon: '',
  },
  {
    platform: 'Twitter',
    address: `@${twitterAddress.split('/').pop()}`,
    link: twitterAddress,
    icon: '',
  },
  {
    platform: 'WhatsApp',
    address: 'Send a message',
    link: whatsappLink,
    icon: '',
  },
];

const ContactDetails = () => {
  return (
    <motion.ul
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="row gap-3 justify-content-evenly col-lg-4 col-12 m-auto border"
    >
      {CONTACT_DETAILS.map(({ platform, address, link }) => (
        <li key={link}>
          <h6>{platform}</h6>
          <a
            href={link}
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
            <small className="text-light text-center d-block mb-3">
              {address}
            </small>
            <button className="btn btnPrimary">Send Message</button>
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default ContactDetails;
