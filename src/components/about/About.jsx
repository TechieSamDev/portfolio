import { motion } from "motion/react";
import HorizontalRule from "../utils/HorizontalRule";
import LinkButton from "../utils/LinkButton";
import HeadShot from "./HeadShot";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } },
  viewport: { once: true },
  transition: {
    // duration: 1,
    ease: "easeOut",
  },
};
function About() {
  return (
    <section id="about" className="max-w-5xl md:px-10 px-5">
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={variants}
        viewport={{ once: true }}
        className=" space-y-10 py-10"
      >
        <div variants={variants} className="flex items-center">
          <h2 className="text-2xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">01. </span> About me
          </h2>
          <HorizontalRule />
        </div>
        <div className="md:flex md:ml-10  space-y-10">
          <div className="space-y-3">
            <div className="">
              {/* <div className="md:flex space-y-5 gap-5 md:px-12"></div> */}
              <p className="tracking-wide text-slate-400 px-2">
                Hi, I’m Samuel, a <b>Front-End Developer</b> with focus on
                building clean, secure, user-friendly websites and apps. I work
                with both Web2 and Web3 technologies, helping individuals,
                startups, and businesses create smooth, functional digital
                experiences. <br />
                Beyond just writing code, I care about making products better,
                whether on improving usability, boosting online presence, or
                sharing ideas that help clients/business grow.
              </p>
            </div>
            <div variants={variants} className="px-5 ">
              <p>Here are some tools I use:</p>
              <ul
                id="skills"
                className="grid grid-cols-2 p-2 md:max-w-80 relative text-slate-300 gap-2 justify-evenly"
              >
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li> Node.js </li>
                <li>WordPress Dev.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center pb-10 px-20">
            <HeadShot />
          </div>
        </div>

        <div className="text-center">
          <LinkButton variant="accent" href="#contact">
            Get in Touch
          </LinkButton>
        </div>
      </motion.div>
    </section>
  );
}
export default About;
