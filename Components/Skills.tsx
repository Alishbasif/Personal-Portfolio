export default function Skills() {
  const frontend = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"];
  const backend = ["Python", "Node.js", "UV"];
  const tools = ["Git", "GitHub", "Streamlit", "Tailwind CSS"];

  return (
    <div id="skills" className="w-full py-20 bg-[#F5DF84] ">
      <h1 className="text-center text-5xl font-extrabold mb-10">Skills</h1>

      <div className="max-w-5xl mx-auto space-y-10 bg-white h-[420px] hover:shadow-xl rounded-lg">

        {/* Frontend */}
        <div>
          <h2 className="text-2xl font-bold  ml-10 pt-4 ">Frontend</h2>
          <div className="flex flex-wrap item-center gap-3">
            {frontend.map((skill, i) => (
              <span 
                key={i} 
                className="px-5 py-2 ml-10 mt-2  text-white rounded-full shadow bg-black transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-2xl font-bold mb-4 ml-10 pt-4">Backend</h2>
          <div className="flex flex-wrap gap-3">
            {backend.map((skill, i) => (
              <span 
                key={i} 
                className="px-5 py-2 ml-10 bg-black rounded-full shadow text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-4 ml-10 pt-4">Tools & Others</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((skill, i) => (
              <span 
                key={i} 
                className="px-5 ml-10 py-2 bg-black text-white rounded-full shadow  transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
