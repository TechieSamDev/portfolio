import {  HiClock, HiCommandLine } from "react-icons/hi2";

const currentDate = new Date();

const AboutCards = () => {
  return (
    <div>
      <ul className="grid gap-5">
        <li className="col-span-6  bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 space-y-1 rounded-lg text-center transition-all duration-150">
          <h3 className="py-3">
            <HiClock className="text-3xl m-auto" />
          </h3>

          <h6 className="font-bold">Experience</h6>
          <small className="mt-5 p-3">2+ years</small>
        </li>

        <li className="col-span-6 bg-secondary hover:bg-secondary/20 border border-slate-600 p-5 space-y-1 rounded-lg text-center transition-all duration-150">
          <h3 className="py-3">
            <HiCommandLine className="text-3xl m-auto" />
          </h3>

          <h6 className="font-bold">Development Focus</h6>
          <small>Frontend & Backend</small>
        </li>
      </ul>
    </div>
  );
};

export default AboutCards;
