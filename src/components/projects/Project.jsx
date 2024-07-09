import LinkButton from '../utils/LinkButton';

const Project = ({
  details: { image, name, description, liveDemo, gitHub },
}) => {
  return (
    <div className="bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 rounded-lg transition-all duration-150 space-y-4">
      <div className="space-y-3">
        <a href={liveDemo} target="_blank">
          <img
            src={image}
            height="300"
            width="350"
            className="w-full h-full rounded-lg"
            alt={name}
          />
        </a>

        <h5 className="font-bold">{name}</h5>
        <div className="text-justify h-32">{description}</div>
      </div>

      <div className="py-5 space-x-5">
        <LinkButton
          variant="accent"
          href={liveDemo}
          target={name === 'Portfolio Website' ? null : '_blank'}
          rel="noreferrer"
        >
          Live Demo
        </LinkButton>

        <LinkButton
          variant="slate-300"
          href={gitHub}
          target="_blank"
          rel="noreferrer"
        >
          {gitHub ? 'Github' : 'Private Repo'}
        </LinkButton>
      </div>
    </div>
  );
};

export default Project;
