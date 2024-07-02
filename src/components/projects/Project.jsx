const Project = ({
  details: { image, name, description, liveDemo, gitHub },
}) => {
  return (
    <div className="bg-secondary p-5 rounded-lg space-y-4">
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
        <a
          href={liveDemo}
          target={name === 'Portfolio Website' ? null : '_blank'}
          rel="noreferrer"
          className="bg-accent text-primary p-3 rounded-lg hover:bg-accent/80 transition duration"
        >
          Live Demo
        </a>
        <a
          href={gitHub}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-300 text-primary p-3 rounded-lg hover:bg-slate-300/80 transition duration"
        >
          {gitHub ? 'Github' : 'Private Repo'}
        </a>
      </div>
    </div>
  );
};

export default Project;
