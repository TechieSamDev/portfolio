import Project from './Project';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <section id="projects">
      <div className="space-y-10">
        <div className="text-center ">
          <h5 className='font-semibold'>Recent Projects <br />I've worked on</h5>
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
