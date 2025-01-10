import LinkButton from '../utils/LinkButton';
import AboutCards from './AboutCards';
import HeadShot from './HeadShot';

function About() {
  return (
    <section id="about">
      <div className=" space-y-10 py-10">
        <div className="text-center">
          <h5 className="font-semibold">
            Get To Know <br />
            About me
          </h5>
        </div>

        <div className="lg:max-w-[70%] space-y-5">
          <div className="md:flex space-y-5 gap-5 md:px-12">
            <HeadShot />
            <AboutCards />
          </div>
          <p className="text-justify md:px-12">
{/*             I am a developer who loves creating websites and apps that deliver
            real results. It’s not just about coding for me—I’m always thinking
            about how the websites I build can help clients reach their goals
            and connect with their audience. <br /> Outside of coding, I like exploring
            new ideas and finding better ways to make my work more impactful. */}

Techie Sam is a developer who loves creating websites and apps that deliver real results. Whether web2 or web3 space, I build solutions that help clients connect with their audience and achieve their goals. For me, coding isn’t just about writing code, it’s about solving real problems and making an impact.

<br /> <br /> Outside of coding, I enjoy exploring new ideas and finding ways to make my work more effective and meaningful. Whether working as part of a team or independently, I’m committed to delivering creative and impactful solutions.
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
