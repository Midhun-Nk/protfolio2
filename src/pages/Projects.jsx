export default function Projects() {
  const projects = [
    {
      title: "ATS Resume Builder",
      desc: "Using Django and OpenAi Implemented ATS Friendly Resume Builder",
    },
    // {
    //   title: "Tic Tac Toe Game",
    //   desc: "Interactive game with dark/light mode toggle.",
    // },
    {
      title: "Disaster Management App",
      desc: "Flutter + Firebase app for real-time SOS alerts.",
    },
    {
      title: "Digital Product Sale Platform",
      desc: "Django platform with order confirmation system.",
    },
    // {
    //   title: "Ayurvedic E-commerce Website",
    //   desc: "React + Django store with payment & tracking.",
    // },
  ];

  return (
    <div id="projects" className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-pink-500">Projects</h1>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-pink-500/40 hover:scale-105 transform transition"
          >
            <h2 className="text-2xl font-semibold">{proj.title}</h2>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
