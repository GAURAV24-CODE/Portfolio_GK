const stats = [
  {
    number: "20+",
    title: "Projects Completed",
  },
  {
    number: "10+",
    title: "Certificates",
  },
  {
    number: "45",
    title: "AI/ML Bootcamp Days",
  },
  {
    number: "100%",
    title: "Learning Mindset",
  },
];

const Stats = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500 transition"
            >

              <h2 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;