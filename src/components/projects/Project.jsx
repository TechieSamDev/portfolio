import { motion } from "motion/react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import LinkButton from "../utils/LinkButton";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } },
  viewport: { once: true },
  transition: {
    ease: "easeIn",
  },
};
const Project = ({
  details: { image, name, description, liveLink, gitHub, stacks },
}) => {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={variants}
      viewport={{ once: true }}
      className="bg-secondary hover:bg-secondary/20 border-2 border-slate-600 p-5 rounded-lg transition-all duration-150 space-y-4"
    >
      <div className="space-y-5 w-full">
        <a aria-label={`View ${name} live`} href={liveLink} target="_blank">
          <img
            src={image}
            width="982"
            height="586"
            loading="lazy"
            className="w-full h-full rounded-lg border"
            alt={name}
          />
        </a>

        <div className="space-y-3">
          <h3 className="font-bold md:text-xl">{name}</h3>
          <div className="text-slate-400 min-h-28">{description}</div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {stacks?.map((stack) => (
            <small
              key={stack}
              className="bg-slate text-slate-400 px-2 text-xs rounded-lg border border-slate-500 "
            >
              {stack}
            </small>
          ))}
        </div>
      </div>

      <div className="py-5 space-x-5">
        <LinkButton
          variant="accent"
          href={liveLink}
          target={name === "Portfolio Website" ? null : "_blank"}
          rel="noreferrer"
        >
          See It Live {"  "}
          <HiArrowTopRightOnSquare className="text-sm inline size-5 font-bold" />
        </LinkButton>

        {gitHub && (
          <LinkButton
            variant="slate-300"
            href={gitHub}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </LinkButton>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
