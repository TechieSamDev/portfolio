import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import LinkButton from "../utils/LinkButton";

const Project = ({
  details: { image, name, description, liveDemo, gitHub },
}) => {
  return (
    <div className="bg-secondary hover:bg-secondary/20 border-2 border-slate-600 p-5 rounded-lg transition-all duration-150 space-y-4">
      <div className="space-y-5">
        <a href={liveDemo} target="_blank">
          <img
            src={image}
            height="250"
            width="350"
            className="w-full h-full rounded-lg border"
            alt={name}
          />
        </a>
        <div className="space-y-3">
          <h5 className="font-bold">{name}</h5>
          <div className="text-justif text-sm text-slate-400 min-h-20">{description}</div>
        </div>
      </div>

      <div className="py-5 space-x-5">
        <LinkButton
          variant="accent"
          href={liveDemo}
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
    </div>
  );
};

export default Project;
