const HeadShot = () => {
  return (
    <div className="w-max relative group shadow bg-accent rounded-tl-lg hover:bg-white">
      <img
        className="m-auto mix-blend-multiply  border border-slate-600 shadow-lg  transition-all duration-300"
        src="/assets/avatar.png"
        width="200"
        height="200"
        alt="head-shot"
      />

      <div className="absolute  left-3 -bottom-3 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all size-full border border-accent rounded-tr-md rounded-bl-md -z-10"></div>
    </div>
  );
};

export default HeadShot;
