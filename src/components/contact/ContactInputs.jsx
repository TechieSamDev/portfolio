import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactInputs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const INPUT_STYLE =
    'peer block w-full appearance-none border border-slate-600 bg-slate-300/10 py-3 px-3 text-sm text-slate-50 rounded focus:border-accent focus:outline-none focus:ring-0';
  const LABEL_STYLE =
    'absolute top-3 px-3 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary peer-focus:bg-accent peer-focus:rounded';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !message)
      return toast.error('Submission failed: All fields required.');

    setIsSubmitting(true);
    fetch('https://techiesamm.vercel.app/api/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, message }),
    })
      .then((response) => response.json())
      .then((res) => {
        setIsSubmitting(false);
        if (res.status === 'fail' || res.status === 'error')
          return toast.error(res.message);
        toast.success(res.message);
        e.target.reset();
      })
      .catch(() => {
        setIsSubmitting(false);
        toast.error('Failed to send. Check your internet!');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* FullName */}
        <p>Send Me a message</p>
        <div className="relative mt-4">
          <input
            name="fullName"
            type="text"
            minLength="5"
            required
            className={INPUT_STYLE}
            placeholder=""
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="fullName" className={LABEL_STYLE}>
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative mt-4">
          <input
            name="email"
            type="email"
            required
            className={INPUT_STYLE}
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="test" className={LABEL_STYLE}>
            Email
          </label>
        </div>

        {/* Message */}
        <div className="relative mt-4">
          <textarea
            type="text"
            id="test"
            className={INPUT_STYLE}
            placeholder=""
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="test" className={LABEL_STYLE}>
            Your Message
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="bg-accent text-primary p-3 px-8 rounded-lg hover:bg-accent/80 transition duration"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg class="animate-spin rounded-full w-5 h-5 border-4 m-auto border-r-slate-500"></svg>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactInputs;
