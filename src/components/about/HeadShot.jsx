const HeadShot = () => {
  return (
    <div className="relative flex items-center justify-center filter-none ">
      <div className="w-max rounded-full bg-secondary border border-slate-800">
        <img
          className="mix-blend-overlay hover:mix-blend-normal filter-none m-auto"
          src="/assets/avatar.png"
          width="250"
          height="250"
          alt="head-shot"
        />
      </div>
    </div>
  );
};

export default HeadShot;
