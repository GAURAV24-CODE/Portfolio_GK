import { ArrowRight, Download } from "lucide-react";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold">
            AI • DATA SCIENCE • MACHINE LEARNING
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Gaurav Kumbhar
            </span>
          </h1>

          <h2 className="text-3xl mt-8 font-semibold">
            AI Engineer •
            <span className="text-blue-500"> Data Scientist • Data Analyst</span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            I build intelligent AI applications, Machine Learning models,
            Business Dashboards, and Data-driven solutions using Python,
            SQL, Power BI, FastAPI, React, and modern AI technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 px-7 py-4 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Explore Projects
              <ArrowRight size={20} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-slate-700 px-7 py-4 rounded-xl hover:border-blue-500 transition duration-300"
            >
              Download Resume
              <Download size={20} />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4 mt-12 max-w-lg">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-blue-500">8+</h3>
              <p className="text-gray-400">Certificates</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-blue-500">AI</h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-blue-500">Open</h3>
              <p className="text-gray-400">To Work</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="Gaurav Kumbhar"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.45)] hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 px-5 py-2 rounded-full">
              <p className="text-sm font-semibold">
                AI • ML Engineer
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;