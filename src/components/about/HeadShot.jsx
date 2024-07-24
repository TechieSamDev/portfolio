const HeadShot = () => {
  return (
    <div className="relative flex items-center justify-center filter-none ">
      <div className="w-max rounded-full bg-secondary ">
        <img
          className="mix-blend-overlay hover:mix-blend-normal filter-none m-auto"
          src="/assets/me.png"
          width="300"
          height="300"
          alt="head-shot"
        />
      </div>
    </div>
  );
};

export default HeadShot;
