const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Data Analytics",
    skills: ["Excel", "Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "AI & Generative AI",
    skills: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "LLMs",
      "AI Agents",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "PostgreSQL",
      "MongoDB",
      "Git",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "VS Code",
      "GitHub",
      "Jupyter",
      "Docker (Learning)",
      "Vercel",
      "Render",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build AI applications,
            machine learning models, analytics dashboards, and
            modern web applications.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 rounded-full text-gray-300 text-sm hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;