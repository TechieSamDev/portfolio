import CTA from "./CTA";
import Intro from "./Intro";
import ContactMenu from "./ContactMenu";

const Hero = () => {
  return (
    <header
      id="hero"
      className="h-screen relative flex items-center justify-center max-w-7xl md:px- m-auto"
    >
      <div className="space-y-8 px-5 -mt-32 md:-mt-10 lg:mx-12">
        <Intro />
        <CTA />
        <ContactMenu />
      </div>
    </header>
  );
};

export default Hero;
