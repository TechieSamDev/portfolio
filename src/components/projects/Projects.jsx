import Project from "./Project";
import { PROJECTS } from "../../constants";
import HorizontalRule from "../utils/HorizontalRule";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl px-5">
      <div className="space-y-10 py-10">
        <div className="flex items-center">
          <h5 className="text-xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">02. </span> Recent projects
          </h5>
          <HorizontalRule />
        </div>
        <ul className="grid sm:grid-cols-2 gap-8 lg:mx-10">
          {PROJECTS.map((details) => (
            <Project key={details.name} details={details} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
