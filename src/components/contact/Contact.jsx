import ContactDetails from './ContactDetails';
import ContactInputs from './ContactInputs';

const Contact = () => {
  return (
    <section id="contact">
      <div className="md:px-10 space-y-10 py-5">
        <div className="text-center">
          <h6 className="font-semibold">
            Get in Touch <br />
            With Sam
          </h6>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <ContactDetails />
          <ContactInputs />
        </div>
      </div>
    </section>
  );
};

export default Contact;
