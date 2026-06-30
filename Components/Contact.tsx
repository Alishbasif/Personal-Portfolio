// import { Poppins} from "next/font/google";

// const poppins = Poppins({
//   weight: ["400", "600", "700"], 
//   subsets: ["latin"],
// });

// export default function Contact() {
//   return (
//     <div id="contact" className="w-[1440px] h-[650px] bg-[#F5DF84]">
//       <div className="w-[1000px] h-[500px]" >
//        <h1 className={`${poppins.className} w-[350px] h-[30px] font-extrabold text-[40px] ml-[550px] pt-[30px]`}>CONTACT ME</h1>
//        <div className="w-[1000px] h-[450px] ml-[160px] mt-[90px]">
//          <form className="shadow-xl h-[510px]">
//             <input placeholder="Enter your Name" type="text" className="w-[800px] h-[60px] pl-[40px] ml-[100px] mt-[30px] shadow-xl rounded-lg bg-[#ffffff]"/>
//             <input placeholder="Enter your Email Address" type="text" className="w-[800px] h-[60px] pl-[40px] ml-[100px] mt-[30px] shadow-xl rounded-lg bg-[#ffffff]"/>
//             <input placeholder="Type your Message" type="text" className="w-[800px] h-[200px] pl-[40px] pb-[130px] ml-[100px] mt-[30px] shadow-xl rounded-lg bg-[#ffffff]"/>
//             <button className="w-[300px] h-[60px] font-bold ml-[350px] mt-[20px] text-white rounded-lg bg-black shadow-lg">Send Messege</button>
//          </form>
//        </div>
//       </div>
//     </div> 
//   )

// }



"use client";

import { useRef, FormEvent } from "react";
import { Poppins } from "next/font/google";
import emailjs from "@emailjs/browser";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3xdygt9",
        "template_y2v77an",
        form.current,
        "tlw5Y78u_h9y--AIJ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div id="contact" className="bg-[#F5DF84] py-20 flex justify-center">
      <div className="w-full max-w-3xl px-4">

        <h1 className={`${poppins.className} sm:text-5xl md:text-6xl text-center text-4xl font-extrabold mb-10`}>
          CONTACT ME
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="shadow-xl p-8 rounded-xl bg-white"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Enter your Name"
            className="w-full h-[60px] pl-4 mt-4 bg-[#F5DF84] shadow rounded-lg"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Enter your Email Address"
            className="w-full h-[60px] pl-4 mt-4 bg-[#F5DF84] shadow rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Type your Message"
            className="w-full h-[150px] pl-4 pt-3 mt-4 bg-[#F5DF84] shadow rounded-lg"
          />

          <button
            type="submit"
            className="w-full h-[60px] font-bold mt-6 text-white rounded-lg bg-black shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}