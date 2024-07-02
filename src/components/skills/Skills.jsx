import VerifiedIcon from '@mui/icons-material/Verified';
import { LANGUAGES, TECHNOLOGIES } from '../../constants';
// console.log(49 % 2);
const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="text-center mt-5">
        <h6>Get to know</h6>
        <h5>About my Skills</h5>
      </div>

      {/* LAnguages */}
      <div className="grid md:grid-cols-2 gap-10 md:p-10 lg:w-2/3 ">
        <div className="py-6 px-2 space-y-5 bg-secondary rounded-lg border border-gray-600">
          <h4 className="text-center">Language</h4>
          <div className="grid grid-cols-3 gap-2 gap-y-5 justify-center">
            {LANGUAGES.map((language) => (
              <div key={language} className="flex text-xs">
                <p className="p-2">
                  <VerifiedIcon style={{ fontSize: '1em' }} /> {language}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="py-5 px-2 space-y-5 bg-secondary rounded-lg border border-gray-600">
          <h4 className="text-center">Technologies</h4>
          <div className="grid grid-cols-3 gap-2 gap-y-5 justify-center ">
            {TECHNOLOGIES.map((technology, i) => (
              <div key={technology} className="flex  text-xs m-auto">
                <p className="p-2 ">
                  <VerifiedIcon style={{ fontSize: '1em' }} /> {technology}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
