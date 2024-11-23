import { LANGUAGES, TECHNOLOGIES } from '../../constants';
import { HiMiniCheckBadge } from 'react-icons/hi2';
// console.log(49 % 2);
const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="py-1 space-y-10">
        <div className="text-center mt-5">
          <h5 className="font-semibold">
            See what powers <br />
            My Projects
          </h5>
        </div>

        {/* LAnguages */}
        <div className="grid md:grid-cols-2 gap-10 md:px-10 lg:w-4/5 ">
          <div className="py-6 px-2 space-y-5 bg-secondary hover:bg-secondary/50 transition-all rounded-lg border border-gray-600">
            <h4 className="text-center">Language</h4>
            <div className="grid grid-cols-3 gap-2 gap-y-5 justify-center">
              {LANGUAGES.map((language) => (
                <div key={language} className="flex text-xs">
                  <p className="p-2 flex gap-1  ">
                    <HiMiniCheckBadge style={{ fontSize: '1em' }} /> {language}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="py-6 px-2 space-y-5 bg-secondary hover:bg-secondary/50 transition-all rounded-lg border border-gray-600">
            <h4 className="text-center">Technologies</h4>
            <div className="grid grid-cols-3 gap-2 gap-y-5 justify-center ">
              {TECHNOLOGIES.map((technology, i) => (
                <div key={technology} className="flex  text-xs m-auto">
                  <p className="p-2  flex gap-1 ">
                    <HiMiniCheckBadge style={{ fontSize: '1em' }} />{' '}
                    {technology}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
