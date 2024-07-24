import LinkButton from '../utils/LinkButton';

const CTA = () => {
  return (
    <div className="flex gap-5">
      <LinkButton
        variant="accent"
        href="/assets/001Abolade-Samuel-Resume.pdf"
        download="001Abolade-Samuel-(Techie_Sam)-Resume.pdf"
        className="border border-accent text-accent p-3 rounded-lg hover:bg-${variant}/80 transition duration"
      >
        Download CV
      </LinkButton>
      <LinkButton href="#contact" variant="slate-300">
        Let's Talk
      </LinkButton>
    </div>
  );
};
export default CTA;