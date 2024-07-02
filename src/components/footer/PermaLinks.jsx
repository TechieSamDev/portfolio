const PERMALINKS = [
  { link: '#', text: 'Home' },
  { link: '#about', text: 'About' },
  { link: '#skills', text: 'Skills' },
  { link: '#projects', text: 'Projects' },
  { link: '#contact', text: 'Conatct' },
];

const PermaLinks = () => {
  return (
    <ul className="m-auto grid md:grid-flow-col">
      {PERMALINKS.map(({ link, text }) => (
        <li key={text} className="">
          <a href={link} className="hover:text-secondary">
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PermaLinks;
