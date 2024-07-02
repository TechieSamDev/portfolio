import ContactLinks from './ContactLinks';
import PermaLinks from './PermaLinks';

const Footer = () => {
  return (
    <footer id="footer" className="bg-accent py-5 pb-48 text-primary">
      <div className="md:w-2/5 m-auto space-y-5 text-center">
        <a href="#home" className="fs-3 fw-bold text-decoration-none">
          Samuel Abolade
        </a>
        <PermaLinks />
        <ContactLinks />
        <div className="text-center mt-4">
          <small>
            &copy; Samuel Abolade - (Techie Sam) 2024. All right reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
