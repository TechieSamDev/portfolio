import portfolio from '../../assets/personal-website-image.png';
import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const Project = ({
  details: { image, name, description, liveDemo, gitHub },
}) => {
  return (
    <motion.li
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="c  border"
    >
      <div>
        <img src={image} className="w-100" alt={name} />
        <h5 className="p-2">{name}</h5>
        <div className="text-justify" style={{ fontSize: 12 }}>
          {description}
        </div>
      </div>
      <div className="mt-2">
        <a
          href={liveDemo}
          target={name === 'Portfolio Website' ? null : '_blank'}
          rel="noreferrer"
          className="btn btnPrimary m-1"
        >
          Live Demo
        </a>
        <a
          href={gitHub}
          target="_blank"
          rel="noreferrer"
          className="btn btnPrimary m-1"
        >
          Github
        </a>
      </div>
    </motion.li>
  );
};

export default Project;
