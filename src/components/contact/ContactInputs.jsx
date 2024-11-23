import { useState } from "react";
import toast from "react-hot-toast";

const ContactInputs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const INPUT_STYLE =
    "w-full appearance-non border  border-slate-500 bg-slate-300/10 py-3 px-3 text-sm text-slate-50 rounded focus:border-accent focus:outline-none focus:ring-0 placeholder:text-slate-600";
  const LABEL_STYLE = "px-1 font-bold ";

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!fullName || !email || !message)
      return toast.error("Submission failed: All fields required.");

    if (!emailRegex.test(email)) {
      return toast.error(
        "Submission failed: Please enter a valid email address."
      );
    }

    setIsSubmitting(true);
    fetch("https://techiesamm.vercel.app/api/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, message }),
    })
      .then((response) => response.json())
      .then((res) => {
        setIsSubmitting(false);
        if (res.status === "fail" || res.status === "error")
          return toast.error(res.message);
        toast.success(res.message);
        e.target.reset();
      })
      .catch(() => {
        setIsSubmitting(false);
        toast.error("Failed to send. Check your internet!");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* FullName */}
        <p>Send Me a message</p>
        <div className="relative mt-4">
          <label htmlFor="fullName" className={LABEL_STYLE}>
            Your Name:
          </label>
          <input
            name="fullName"
            type="text"
            minLength="5"
            required
            className={INPUT_STYLE}
            placeholder="How should I call you?"
            onChange={(e) => setFullName(e.target.value?.trim())}
          />
        </div>

        {/* Email */}
        <div className="relative mt-4">
          <label htmlFor="test" className={LABEL_STYLE}>
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
          <label htmlFor="test" className={LABEL_STYLE}>
            Your Message:
          </label>
          <textarea
            type="text"
            id="test"
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span class="animate-spin rounded-full block size-6 border-2 m-auto border-r-slate-500"></span>
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
