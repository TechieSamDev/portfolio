const Intro = () => {
  const introTexts = [
    <h5 className="text-sm text-slate-400 ">Hey, I'm</h5>,
    <h1 className="text-5xl font-bold text-slate-200">
      Samuel Abolade.{' '}
      <small className="text-slate-500 text-sm font-light">Techie Sam</small>
    </h1>,
    <h5 className="text-lg text-slate-200">Software Engineer</h5>,
  ];
  return <div className="space-y-2">{introTexts.map((text) => text)}</div>;
};

export default Intro;
