import ContactLinks from './ContactLinks';
import PermaLinks from './PermaLinks';

const Footer = () => {
  return (
    <footer id="footer" className="bg-accent py-5 pb-32 text-primary">
      <div className="md:w-2/5 m-auto space-y-5 text-center">
        <a href="#home" className="text-xl font-semibold tracking-wide">
          Samuel Abolade <span className="text-accent">(Techie Sam)</span>
        </a>
        <PermaLinks />
        <ContactLinks />
        <div className="text-center mt-4">
          <small>
            &copy; 2026 Samuel Abolade (Techie Sam). All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
