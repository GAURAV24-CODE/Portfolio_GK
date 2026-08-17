const timeline = [
  {
    year: "2023",
    title: "Bachelor of Computer Applications (BCA)",
    description:
      "Completed BCA with a strong foundation in programming, databases, and software development.",
  },
  {
    year: "2025",
    title: "AI Internship",
    description:
      "Worked on AI solutions, Python development, machine learning concepts, and real-world problem solving during my internship.",
  },
  {
    year: "2025 - Present",
    title: "Master of Computer Applications (MCA)",
    description:
      "Currently pursuing MCA while building real-world AI, Machine Learning, Data Science, and Full Stack projects.",
  },
  {
    year: "Current",
    title: "Building DataSight AI",
    description:
      "Developing an AI-powered business analytics platform using FastAPI, React, PostgreSQL, JWT Authentication, Machine Learning, and Generative AI.",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Journey</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            My learning path towards becoming an AI Engineer and Data Scientist.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {timeline.map((item, index) => (
            <div key={index} className="mb-14 ml-8 relative">

              <div className="absolute -left-11 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-950"></div>

              <span className="text-blue-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Journey;