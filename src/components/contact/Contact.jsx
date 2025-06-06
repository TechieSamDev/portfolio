import HorizontalRule from "../utils/HorizontalRule";
import { CONTACT_DETAILS as CONTACT_DETAILS_RAW } from "../../constants";
import ContactInputs from "./ContactInputs";
import LinkButton from "../utils/LinkButton";

const Contact = () => {
  let CONTACT_DETAILS = ["email", "linkedin", "whatsapp", "telegram"];
  CONTACT_DETAILS = CONTACT_DETAILS.map(
    (detail) => CONTACT_DETAILS_RAW[detail]
  );
  return (
    <section id="contact" className="max-w-6xl border m-auto">
      <div className="md:px-10 space-y-10 py-5">
        <div className="flex items-center">
          <h5 className="text-xl whitespace-nowrap pr-2 border px text-slate-200">
            <span className="text-sm text-accent px-2">03. </span> Get in touch
          </h5>
          <HorizontalRule />
        </div>

        <div className="md:flex max-w-4xl p-5 m-auto space-y-5 md:space-y-0 border gap-5">
          <div className="md:w-1/2">
            <ContactInputs />
          </div>
          <div className="flex-1 border gap-16">
            <ul className="space-y-5 max-w-80 m-5 p-2">
              {CONTACT_DETAILS?.map(({ platform, address, link }) => (
                <li key={platform} className="bg-secondary flex ">
                  <h6>{platform}</h6>
                  <address className="">{address}</address>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
