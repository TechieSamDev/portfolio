import { motion } from "framer-motion";
import { textVariants } from "../../styles/ScrollEffectAnimationVariant";

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
          I'm a results-focused web developer dedicated to delivering top-notch solutions. With a keen focus on quality, hiring me ensures you have a motivated professional equipped with the skills to tackle any challenge. I thrive on creative problem-solving and specialize in crafting user-friendly designs. Adaptable and collaborative, I excel in dynamic environments and enjoy working alongside others. Let's connect and collaborate to create exceptional digital experiences!
      </p>
      <a href="#contact" className="btn btnPrimary p-3">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default AboutText;
