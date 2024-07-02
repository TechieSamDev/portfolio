import ContactDetails from './ContactDetails';
import ContactInputs from './ContactInputs';

const Contact = () => {
  return (
    <section id="contact">
      <div className="border px-5 md:px-10">
        <div className="text-center mt-5">
          <h6>Get in Touch</h6>
          <h5>Contact Me</h5>
        </div>

        <div className="grid md:grid-cols-2 gap-5 py-5">
          <ContactDetails />
          <ContactInputs />
        </div>
      </div>
    </section>
  );
};

export default Contact;
