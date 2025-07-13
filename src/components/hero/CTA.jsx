import LinkButton from "../utils/LinkButton";

const CTA = () => {
  return (
    <div className="flex gap-5">
      <LinkButton
        variant="accent"
        href="/assets/001Techie_Sam-Resume.pdf"
        download="001Techie_Sam-Resume.pdf"
        className="border border-accent text-accent py-3 px-4 rounded-lg transition duration outline-none flex items-center  focus:bg-accent/50 focus:text-slate-100"
      >
        Get Resume
      </LinkButton>
      <LinkButton href="#contact" variant="accent">
        Get in Touch
      </LinkButton>
    </div>
  );
};
export default CTA;
