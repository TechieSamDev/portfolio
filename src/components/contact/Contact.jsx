import HorizontalRule from "../utils/HorizontalRule";
import ContactInputs from "./ContactInputs";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section id="contact" className="max-w-6xl m-auto">
      <div className="md:px-10 space-y-10 py-5">
        <div className="flex items-center ">
          <h2 className="text-xl whitespace-nowrap pr-2 px text-slate-200">
            <span className="text-sm text-accent px-2">03. </span> Get in touch
          </h2>
          <HorizontalRule />
        </div>

        <div className="md:flex max-w-5xl p-5 m-auto space-y-16 md:space-y-0 gap-10">
          <div className="md:w-1/2">
            <ContactInputs />
          </div>
          <div className="space-y-5 md:w-1/2 h-[500px] w-full">
            <h3 className="text-accent font-bold">Book a Free Session</h3>
            <div
              className="calendly-inline-widget w-full h-full rounded-md"
              data-url="https://calendly.com/techiesam-dev?primary_color=#50d3ca"
            ></div>
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
