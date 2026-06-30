import { Poppins} from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],
});

export interface aboutme {
  title:string,
  desc : string,
  button:string
}

export const abouts :aboutme[]=[
  {
    title : "Web Designer",
    desc : "I design modern, fast, and conversion-focused websites that help brands grow.Turning your ideas into pixel-perfect,user-friendly web experiences.",
    button:"View Website"
    },

    {
    title : "UI/UX Designer",
    desc : "I build user-first interfaces with clarity, consistency and creativity.Design that solves problems.Designs that connect users with what really matters.",
    button :"View Design"
    },

    {
    title : "AI Agent Builder",
    desc : "I design modern, fast, and conversion-focused websites Chatbots that help brands grow.Turning your ideas into pixel-perfect,user-friendly web experiences.",
    button:"View Chatbot"
    }
  ]

export default function About() {
  return (
    <section id="about" className="w-full py-10">
    <div className="max-6xl w-auto px-4 h-[500px]">
        <h1 className={`${poppins} text-4xl sm:text-5xl md:text-6xl text-black font-extrabold text-center mb-12`}>About Me</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 transition">
          {abouts.map((item,index)=>(
          <div
              key={index}
              className="p-6 bg-[#F5DF84] hover:shadow-xl rounded-lg transition flex flex-col "
            >
              <h1 className="md:text-3xl text-2xl text-center font-bold mb-4">
                {item.title}
              </h1>

            <div className="p-4 bg-white rounded-lg flex-1 flex flex-col justify-between">
              <p className="text-xl md:text-lg text-center leading-relaxed">
                {item.desc}
                </p>
              <Link href="/" className="mt-6 flex justify-center">
              <button className="py-3 px-6 bg-black text-white transition font-bold rounded-lg hover:opacity-90 transition">
                {item.button}
              </button></Link>
            </div>
          </div>
))}
       </div > 
       </div>   
    </section >
  );
}