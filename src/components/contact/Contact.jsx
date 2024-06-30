import StyledCard from '../../styles/StyledCard';
import ContactInputs from './ContactInputs';
import ContactDetails from './ContactDetails';

const Contact = () => {
  return (
    <section id="contact">
      <div className="text-center mt-5">
        <h6>Get in Touch</h6>
        <h5>Contact Me</h5>
      </div>
      <StyledCard className="row gap-3 m-auto border">
        <ContactDetails />
        <ContactInputs />
      </StyledCard>
    </section>
  );
};

export default Contact;
