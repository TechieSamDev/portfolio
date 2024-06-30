import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const AboutText = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={textVariants}
      whileInView="onscreen"
      initial="offscreen"
      className="col-12 col-sm-10 m-auto fs-6 mt-4 text-sm-center"
    >
      <p className="text-center">
        As an outcome-driven web developer, I am committed to delivering
        excellent results. Hiring me means working with a motivated individual
        who is dedicated to excellence. I excel at interface design as well as
        backend development. <br /> <br />I flourish in fast-paced environments
        and enjoy teamwork. Let's connect to create incredible digital
        experiences!
      </p>
      <div className="text-center">
        <a href="#contact" className="btn btnPrimary p-3">
          Get in Touch
        </a>
      </div>
    </motion.div>
  );
};

export default AboutText;
