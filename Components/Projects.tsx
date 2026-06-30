import {project_card } from "@/Components/Card"
import { Poppins} from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],
});

export default function Projects() {
    return(
    <div id="projects" className="w-[1440px] h-[1400px] bg-white">
     <h1 className={`${poppins} h-[30px] text-[50px] ml-[520px] text-[#000000] font-extrabold pb-[70px]`}>My Projects</h1>
     <div className="w-[1250px] h-[900px] flex grid-cols-3 ml-[60px]">

 <div className="w-full max-w-[1250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {project_card.map((item, index) => (
            <div
              key={index}
              className= "rounded-lg p-4 shadow-lg hover:shadow-2xl transition bg-[#F5DF84]"
          >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
          
          <div className="bg-white rounded-lg">
              <h2 className="text-xl font-extrabold mb-2 ml-4">{item.title}</h2>

              <p className="text-black text-sm mb-3 ml-4">{item.desc}</p>

              <p className="text-black font-semibold text-sm ml-4 pb-4 ">
                {item.tools}
              </p>
             </div> 
            </div>
          ))}
        </div>
      </div>


    </div>
    </div>
  );
}
