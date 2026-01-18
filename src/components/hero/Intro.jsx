import { motion } from "motion/react";
const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 1 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};
const Intro = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=""
    >
      <motion.small variants={itemVariants} className="text-sm text-accent ">
        Hey, I'm
      </motion.small>

      <div className="my-3 space-y-2">
        <motion.h1
          className="md:text-6xl sm:text-5xl text-4xl font-bold text-slate-200"
          variants={itemVariants}
        >
          Samuel Abolade
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="md:w-2/3 lg:w-1/2 pt-2 text-sm md:text-base text-slate-400"
        >
          I build apps and websites that are secure, reliable, and easy to use for everyone.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Intro;
