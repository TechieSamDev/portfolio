const HeadShot = () => {
  return (
    <div className="relative flex justify-center border">
      <img
        className=""
        src="/assets/me.png"
        width="200"
        height="200"
        alt="head-shot"
      />
      <div
        width="200"
        className="absolute  w-[200px] h-[200px] rounded-full bg-accent/ backdrop-filter  border border-red-500"
      ></div>
    </div>
  );
};

export default HeadShot;
