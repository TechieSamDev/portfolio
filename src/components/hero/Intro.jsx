const Intro = () => {
  const introTexts = [
    <h5 key="greetings" className="text-sm text-accent ">
      Hey, I'm
    </h5>,
    <div className="space">
      <h1
        key="name"
        className="md:text-6xl sm:text-5xl text-4xl font-bold text-slate-200"
      >
        Samuel Abolade
        {/* <small className="text-slate-500 text-sm font-light">Techie Sam</small> */}
      </h1>
      {/* <h3 key="intro-text" className="text-2xl font-medium tracking-tighter text-slate-300/70">
        I build things that lives on the web.
      </h3> */}
      
    </div>,

    <h5
      key="description"
      className="lg:w-1/2 pt-3 text-sm md:text-base text-slate-500"
    >
      I’m a software engineer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products at Upstatement.
    </h5>,
  ];
  return (
    <div className="space-y-2 -mt-16">{introTexts.map((text) => text)}</div>
  );
};

export default Intro;
