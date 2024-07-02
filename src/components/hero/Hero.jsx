import CTA from './CTA';
import Intro from './Intro';

const Hero = () => {
  return (
    // <section>
      
    // </section>
    <header id='hero' className="h-screen flex items-center container m-auto border">
      <div className="space-y-8 px-5 lg:mx-12">
        <Intro />
        <CTA />
      </div>
    </header>
  );
};

export default Hero;
