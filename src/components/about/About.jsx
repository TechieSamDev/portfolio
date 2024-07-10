import LinkButton from '../utils/LinkButton';
import AboutCards from './AboutCards';
import HeadShot from './HeadShot';

function About() {
  return (
    <section id="about">
      <div className=" space-y-10 py-10">
        <div className="text-center">
          <h6>Get To Know</h6>
          <h5>About me</h5>
        </div>

        <div className="lg:max-w-[70%] space-y-5">
          <div className="flex gap-5 md:px-12">
            <HeadShot />
            <AboutCards />
          </div>
          <p className="text-justify md:px-12">
            As an outcome-driven web developer, I am committed to delivering
            excellent results. Hiring me means working with a motivated
            individual who is dedicated to excellence. I excel at interface
            design as well as backend development. <br /> <br />
            My strengths include thriving in fast-paced environments and
            successfully collaborating with teams. Let's connect to create incredible digital experiences!
          </p>
        </div>

        <div className="text-center">
          <LinkButton variant="accent" href="#contact">
            Get in Touch
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
export default About;
