import { useState } from "react";
import toast from "react-hot-toast";

const ContactInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const INPUT_STYLE =
    "w-full appearance-non border  border-slate-500 bg-slate-300/10 py-3 px-3 text-sm text-slate-50 rounded focus:border-accent focus:outline-none focus:ring-0 placeholder:text-slate-600";
  const LABEL_STYLE = "px-1 font-bold ";

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!name || !email || !message)
      return toast.error("Submission failed: All fields required.");

    if (!emailRegex.test(email)) {
      return toast.error(
        "Submission failed: Please enter a valid email address."
      );
    }

    setStatus("loading");
    fetch(import.meta.env.VITE_FORM_API, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
        access_key: import.meta.env.VITE_FORM_ACCESS_KEY,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (!res.success) {
          setStatus("error");
          return toast.error("Something went wrong!");
        }

        setStatus("success");
        toast.success("Your Message was sent.");
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
        toast.error("Failed to send. Check your internet!");
      });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-500 text-green-900 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="70"
          height="70"
          viewBox="0 0 50 50"
          fill="#40C057"
        >
          <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
        </svg>

        <h2 className="text-lg font-semibold text-green-800">
          Message received!
        </h2>

        <p className="text-sm text-green-600 text-center">
          Thanks {<b>{name}</b> || "there"}, your message has been received.
          I&apos;ll reach out soon, typically within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="6d64b7ff-87cc-4a6d-809d-df3f8f342fcd"
        />
        <p className="text-accent font-bold">Send Me a message</p>
        <div className="relative mt-4">
          <label htmlFor="name" className={LABEL_STYLE}>
            Your Name:
          </label>
          <input
            name="name"
            type="text"
            minLength="5"
            required
            className={INPUT_STYLE}
            placeholder="How should I call you?"
            onChange={(e) => setName(e.target.value?.trim())}
          />
        </div>

        {/* Email */}
        <div className="relative mt-4">
          <label htmlFor="email" className={LABEL_STYLE}>
            Email:
          </label>
          <input
            name="email"
            type="email"
            required
            className={INPUT_STYLE}
            placeholder="What's the best email to contact you?"
            onChange={(e) => setEmail(e.target.value?.trim())}
          />
        </div>

        {/* Message */}
        <div className="relative mt-4">
          <label htmlFor="message" className={LABEL_STYLE}>
            Your Message:
          </label>
          <textarea
            type="text"
            id="message"
            className={INPUT_STYLE}
            placeholder="Your thoughts here..."
            rows={5}
            onChange={(e) => setMessage(e.target.value?.trim())}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-accent text-primary outline-none focus:ring focus:ring-accent/40 p-3 px-8 rounded-lg hover:bg-accent/80 transition duration w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <div className="flex w-28 m-auto">
                <span className="animate-spin rounded-full inline-block size-4 border-2 m-auto border-r-slate-500"></span>
                <span className="text-slate-500">Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactInputs;
