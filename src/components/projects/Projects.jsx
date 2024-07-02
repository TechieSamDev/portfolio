import Project from './Project';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <section id="projects">
      <div className="">
        <div className="text-center mt-5 mb-5">
          <h6>Recent Projects</h6>
          <h5>Projects</h5>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-10">
          {PROJECTS.map((details) => (
            <Project key={details.name} details={details} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
