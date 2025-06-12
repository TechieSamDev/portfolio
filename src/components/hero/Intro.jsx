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
      className="space-y-"
    >
      <motion.h5 variants={itemVariants} className="text-sm text-accent ">
        Hey, I'm
      </motion.h5>

      <div className="my-3 space-y-2">
        <motion.h1
          className="md:text-6xl sm:text-5xl text-4xl font-bold text-slate-200"
          variants={itemVariants}
        >
          Samuel Abolade
        </motion.h1>

        <motion.h5
          variants={itemVariants}
          className="md:w-2/3 lg:w-1/2 pt-2 text-sm md:text-base text-slate-400"
        >
          I’m a web developer who builds clean, user-friendly websites. I work
          with both Web2 and Web3 technologies, making the internet more
          accessible and enjoyable for everyone.
        </motion.h5>
      </div>
    </motion.div>
  );
};

export default Intro;
