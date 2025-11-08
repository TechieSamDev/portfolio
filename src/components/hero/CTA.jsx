import LinkButton from "../utils/LinkButton";
const CTA = () => {
  return (
    <div className="flex gap-5">
      <LinkButton
        variant="accent"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1TBaH1CZiuCAHYqZQSysujHZe-B0rlB4iCr5ajIamRzM//export?format=pdf"
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