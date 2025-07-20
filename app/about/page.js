"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (<>
  <Navbar></Navbar>
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-indigo-500 inline-block pb-2">
          About Me
        </h1>

        <p className="text-lg leading-relaxed mt-6 text-gray-300">
          Hello! I'm <span className="font-semibold text-white">Saiprasad Algulwad</span>, a dedicated and creative Full Stack Developer based in India. I specialize in crafting fast, modern, and user-friendly web applications using technologies like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>. I enjoy building things that live on the web—from websites to full-stack apps.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-gray-300">
          I focus on writing clean, maintainable code, with attention to performance and accessibility. I'm always learning and love working with new technologies. My goal is to build intuitive digital experiences that make an impact.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-gray-300">
          Outside of coding, I'm curious about UI/UX design, enjoy contributing to open-source projects, and love staying updated with the latest dev trends.
        </p>

        {/* Skills */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Tech Stack</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {[
            "HTML", "CSS", "JavaScript", "React", "Next.js", 
            "Node.js", "Express", "MongoDB", "Tailwind CSS"
          ].map(skill => (
            <li key={skill} className="bg-gray-800 text-indigo-300 px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>

        {/* Projects */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Projects</h2>
        <div className="space-y-4">

          {/* Manga Reading App */}
          <div className="p-4 bg-gray-800 rounded-md">
            <h3 className="text-lg font-bold text-indigo-300">Manga Reading App</h3>
            <p className="text-sm text-gray-400">
              A web app to browse and read manga online.
            </p>
            <div className="mt-2 flex gap-4 text-indigo-400 text-sm">
              <Link href="https://manga-tau-nine.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </Link>
              <Link href="https://github.com/saikingalgulwad/manga" target="_blank" className="hover:underline">
                GitHub Repo
              </Link>
            </div>
          </div>

          {/* Marathi Rap Project */}
          <div className="p-4 bg-gray-800 rounded-md">
            <h3 className="text-lg font-bold text-indigo-300">Marathi Rap Website</h3>
            <p className="text-sm text-gray-400">
              A modern web platform to showcase and promote Marathi rap songs and underground artists. Users can explore tracks, watch embedded audio, and support local talent.
            </p>
            <div className="mt-2 flex gap-4 text-indigo-400 text-sm">
              <Link href="https://marathi-rap.vercel.app/" target="_blank" className="hover:underline">
                Live Demo
              </Link>
              <Link href="https://github.com/saikingalgulwad/newmarathi" target="_blank" className="hover:underline">
                GitHub Repo
              </Link>
            </div>
          </div>

        </div>

        {/* Resume */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-white">Resume</h2>
        <p className="text-lg text-gray-300">
          Want to know more? You can download my full resume below:
        </p>
        <Link 
          href="/sai.pdf" 
          download 
          
          className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Download Resume (PDF)
        </Link>
      </div>
    </div></>
  );
}
