const certifications = [
  {
    title: "Certified Data Scientist",
    issuer: "DataMites",
    year: "2025",
  },
  {
    title: "Yuva AI",
    issuer: "NIELIT",
    year: "2025",
  },
  {
    title: "Power BI",
    issuer: "Simplilearn",
    year: "2025",
  },
  {
    title: "AI Internship",
    issuer: "Rubixe",
    year: "2025",
  },
  {
    title: "Python Programming",
    issuer: "DataMites",
    year: "2025",
  },
  {
    title: "Machine Learning",
    issuer: "DataMites",
    year: "2025",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Certifications</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
            Professional certifications that strengthen my skills in AI,
            Data Science, Machine Learning, Analytics, and Software
            Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {cert.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {cert.issuer}
              </p>

              <span className="inline-block mt-6 px-4 py-2 bg-blue-600/20 rounded-full text-blue-300">
                {cert.year}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;