const projects = [
  {
    title: "DataSight AI",
    category: "AI / ML",
    description:
      "An AI-powered business analytics platform that analyzes datasets, generates dashboards, predicts trends, and provides business insights using Machine Learning and LLMs.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Resume Analyzer",
    category: "Generative AI",
    description:
      "Analyzes resumes against job descriptions using NLP and AI to generate ATS scores, missing skills, and personalized recommendations.",
    tech: ["Python", "FastAPI", "React", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Retail Sales Dashboard",
    category: "Data Analyst",
    description:
      "Interactive Power BI dashboard analyzing sales, profit, customers, KPIs, and regional performance for business decision making.",
    tech: ["Power BI", "Excel", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Customer Churn Prediction",
    category: "Data Science",
    description:
      "Machine Learning model that predicts customer churn using feature engineering, classification algorithms, and model evaluation.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "HR Analytics Dashboard",
    category: "Data Analyst",
    description:
      "HR dashboard visualizing employee attrition, hiring trends, performance, and workforce analytics.",
    tech: ["Power BI", "Excel"],
    github: "#",
    demo: "#",
  },
  {
    title: "Loan Approval Prediction",
    category: "Machine Learning",
    description:
      "Predictive model that determines loan approval probability using supervised learning algorithms.",
    tech: ["Python", "ML", "FastAPI"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            A collection of real-world Data Analytics, Machine Learning,
            AI, and Full Stack projects demonstrating practical
            problem-solving skills.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-sm text-blue-400 font-semibold">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex-1 text-center border border-slate-700 hover:border-blue-500 py-3 rounded-lg transition"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;