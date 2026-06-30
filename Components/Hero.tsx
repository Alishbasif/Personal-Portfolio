'use client'

// import Image from "next/image";
import React, {useState} from 'react'
import { Poppins} from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "700"], // jitni chaho
  subsets: ["latin"],
});


export default function Hero() {
  const [open, setOpen] = useState(false)
  return (
    // hero section 
    <header className="w-full">
      {/* navbar section */}
     <nav className="bg-black text-white w-full px-6 md:px-10 py-4 flex items-center justify-between shadow-md">
      <div>
        <h2 className="text-[#F5DF84] text-2xl md:text-3xl font-extrabold ">Personal Portfolio</h2>
      </div>
      {/* desktop links */}
      <ul className="hidden md:flex item-center font-bold text-white gap-8">
       <Link href="/"> <li>Home</li></Link>
        <a href="#about"><li>About</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>

      {/* mobile menu button */}
      <button
    onClick={() => setOpen((v) => !v)}
    className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none"
    aria-label="Toggle menu"
>
      </button>
       {open && (
    <div className="md:hidden bg-black/90">
      <ul className="flex flex-col gap-3 px-6 pb-4 text-center font-semibold">
       <li>
         <a href="#">Home</a>
       </li>
       <li>
         <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
       </li>
      <li>
         <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
)}
      {/* navbar close */}
     </nav>
<section className="bg-[#F5DF84]">
  <div className="flex flex-col items-center justify-center text-center min-h-screen px-4">

    {/* Profile Image */}
    <div className="flex-shrink-0">
      {/* <Image
        src="/profile.jpg"
        alt="profile picture"
        width={340}
        height={340}
        className="rounded-md shadow-2xl object-cover"
      /> */}
    </div>

    {/* Floating Card */}
    <div className="bg-white backdrop-blur-md shadow-xl rounded-2xl px-6 py-6 md:px-10 md:py-8 max-w-2xl">

      <h1 className={`${poppins.className} text-3xl md:text-5xl font-bold mb-3`}>
        Alishba Asif
      </h1>

      <p className="text-base md:text-lg text-gray-700 mb-6">
        AI Agent Builder, UI/UX Designer & Frontend Developer. <br className="hidden md:block" />
        Future Full Stack Developer crafting delightful digital experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-bold w-full sm:w-auto hover:scale-105 transition">
            View Projects
          </button>
        </a>

        <a href="#contact">
          <button className="bg-white border border-black text-black px-6 py-3 rounded-lg font-bold w-full sm:w-auto hover:scale-105 transition">
            Contact Now
          </button>
        </a>
      </div>

    </div>
  </div>
</section>
</header>
 );
}
