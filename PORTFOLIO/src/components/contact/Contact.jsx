
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
} from "lucide-react";


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            I'm currently open to internships, freelance work, and
            full-time opportunities in AI, Data Science, and Data Analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
              <Mail className="text-blue-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">your@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
              <Phone className="text-blue-400" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
              <MapPin className="text-blue-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition"
              >
                <Globe/>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition"
              >
                <ExternalLink />
              </a>
            </div>

          </div>

          {/* Right */}
          <form className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            ></textarea>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl transition font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;