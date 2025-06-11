const PermaLinks = () => {
  return (
    <ul className="m-auto  min-h-10 flex flex-col gap-5 sm:flex-row items-center justify-center">
      <li>
        <a
          href="#"
          className="hover:text-secondary hover:scale-110 hover:underline transition-all"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-secondary hover:scale-110 hover:underline transition-all"
        >
          About
        </a>
      </li>
      
      <li>
        <a
          href="#projects"
          className="hover:text-secondary hover:scale-110 hover:underline transition-all"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-secondary hover:scale-110 hover:underline transition-all"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default PermaLinks;
