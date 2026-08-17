import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-4xl mx-auto text-center px-6">

        <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
          Resume
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Download My Resume
        </h2>

        <p className="text-gray-400 mt-6">
          Download my latest resume to learn more about my education,
          technical skills, certifications, and AI/ML projects.
        </p>

        <button className="mt-10 flex items-center gap-3 mx-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition">
          <Download size={22} />
          Download Resume
        </button>

      </div>
    </section>
  );
};

export default ResumeSection;