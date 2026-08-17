const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Passionate about Artificial Intelligence, Machine Learning,
            Data Science, and Business Intelligence. I enjoy building
            intelligent applications that solve real-world business
            problems using modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-2xl font-bold text-blue-400">
              🎓 Education
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              • MCA (Pursuing)
              <br />
              • BCA Graduate
              <br />
              • AI / ML Bootcamp
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-2xl font-bold text-blue-400">
              💼 Experience
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              • AI Internship
              <br />
              • FastAPI Development
              <br />
              • Data Analytics Projects
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition">
            <h3 className="text-2xl font-bold text-blue-400">
              🚀 Interests
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              • Artificial Intelligence
              <br />
              • Machine Learning
              <br />
              • Data Science
              <br />
              • Generative AI
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;