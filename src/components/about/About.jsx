import HorizontalRule from "../utils/HorizontalRule";
import LinkButton from "../utils/LinkButton";
import HeadShot from "./HeadShot";

function About() {
  return (
    <section id="about" className="max-w-5xl md:px-10 px-5">
      <div className=" space-y-10 py-10">
        <div className="flex items-center">
          <h5 className="text-2xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">01. </span> About me
          </h5>
          <HorizontalRule />
        </div>

        <div className="md:flex space-y-10">
          <div className="space-y-3">
            <div className="">
              {/* <div className="md:flex space-y-5 gap-5 md:px-12"></div> */}
              <p className="tracking-wide text-slate-400 px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, cum! Architecto, assumenda eligendi commodi corrupti
                quasi repudiandae possimus non vel magni dolor iure, earum
                totam, dolores recusandae incidunt cum molestias iusto.
                Provident, fugiat modi. Suscipit neque iusto cum labore alias
                nihil ratione repudiandae ipsam at! Distinctio atque culpa est!
                Nesciunt!
              </p>
            </div>
            <div className="px-5 ">
              <ul className="grid grid-cols-2 p-2 md:max-w-80 relative text-slate-400 gap-2 justify-evenly">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li> Node.js </li>
                <li>WordPress Dev.</li>
              </ul>
            </div>
          </div>

          <div className="p-10">
            <HeadShot />
          </div>
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
