import HorizontalRule from "../utils/HorizontalRule";
import { CONTACT_DETAILS as CONTACT_DETAILS_RAW } from "../../constants";
import ContactInputs from "./ContactInputs";
import LinkButton from "../utils/LinkButton";

const Contact = () => {

  return (
    <section id="contact" className="max-w-6xl m-auto">
      <div className="md:px-10 space-y-10 px-3 py-5">
        <div className="flex items-center ">
          <h2 className="text-xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">03. </span> Get in touch
          </h2>
          <HorizontalRule />
        </div>

        <div className="md:flex max-w-4xl p-5 m-auto space-y-5 md:space-y-0 gap-5">
          <div className="md:w-3/5">
            <ContactInputs />
          </div>

          {/* <div className="border flex-1">
            <ul className="space-y-5">
              {CONTACT_DETAILS?.map(({ platform, address, link }) => (
                <li key={platform} className="bg-secondary rounded border border-slate-700 p-5 flex gap-2 ">
                  <h6 className="font-bold">{platform}: </h6>
                  <a href={link} target="_blank">
                    <address className="text-accent underline underline-offset-4">{address}</address>
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
