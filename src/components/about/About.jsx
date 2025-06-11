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
          <h5 className="text-2xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">01. </span> About me
          </h5>
          <HorizontalRule />
        </div>
        <div className="md:flex md:ml-10  space-y-10">
          <div className="space-y-3">
            <div className="">
              {/* <div className="md:flex space-y-5 gap-5 md:px-12"></div> */}
              <p className="tracking-wide text-slate-400 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, cum! Architecto, assumenda eligendi commodi corrupti
                quasi repudiandae possimus non vel magni dolor iure, earum
                totam, dolores recusandae incidunt cum molestias iusto.
                Provident, fugiat modi. Suscipit neque iusto cum labore alias
                nihil ratione repudiandae ipsam at! Distinctio atque culpa est!
                Nesciunt!
              </p>
            </div>
            <div variants={variants} className="px-5 ">
              <ul className="grid grid-cols-2 p-2 md:max-w-80 relative text-slate-400 gap-2 justify-evenly">
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
