import CTA from "./CTA";
import Intro from "./Intro";
import ContactMenu from "./ContactMenu";

const Hero = () => {
  const handleScrollDown = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      window.scrollTo({ top: hero.offsetHeight, behavior: "smooth" });
    }
  };

  return (
    <header
      id="hero"
      className="h-screen relative flex items-center justify- max-w-7xl md:px- m-auto"
    >
      <div className="space-y-8 px-5 -mt-32 md:-mt-10 lg:mx-12">
        <Intro />
        <CTA />
        <ContactMenu />
      </div>

      {/* Scroll hint chevron */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        style={{ animation: "heroChevronBounce 2s ease-in-out infinite" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-accent transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <style>{`
        @keyframes heroChevronBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </header>
  );
};

export default Hero;
