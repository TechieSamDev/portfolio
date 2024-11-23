import LinkButton from '../utils/LinkButton';

const CTA = () => {
  return (
    <div className="flex gap-5">
      <LinkButton
        variant="accent"
        href="/assets/001Abolade-Samuel-Resume.pdf"
        download="001Abolade-Samuel-(Techie_Sam)-Resume.pdf"
        className="border-2 border-accent text-accent p-3 rounded-lg hover:bg-${variant}/80 transition duration outline-none focus:bg-accent/50 focus:text-slate-100"
      >
        Get My Resume
      </LinkButton>
      <LinkButton href="#contact" variant="accent">
        Let's Talk
      </LinkButton>
    </div>
  );
};
export default CTA;
