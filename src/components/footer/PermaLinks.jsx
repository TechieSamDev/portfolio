const PermaLinks = () => {
  return (
    <ul className="m-auto grid md:grid-flow-col min-h-10 space-y-3 md:space-y-0">
      <li>
        <a
          href="#"
          className="hover:text-secondary hover:text-lg transition-all"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-secondary hover:text-lg transition-all"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="hover:text-secondary hover:text-lg transition-all"
        >
          Tech Stacks
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-secondary hover:text-lg transition-all"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-secondary hover:text-lg transition-all"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default PermaLinks;
