import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <main className="text-white py-20">

      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold">
          Hello<span className="text-amber-400 text-4xl">.</span>
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          I'm <span className="text-[#ff715b]">Saiprasad</span>
        </h1>

        <h3 className="text-2xl mt-3 font-mono underline decoration-[#ff715b] underline-offset-4">
          Full Stack Java Developer
        </h3>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          I build modern web applications using Next.js, React, Tailwind CSS,
          and Java Spring Boot. I enjoy creating scalable backend systems and
          clean responsive frontend interfaces.
        </p>

        <div className="flex justify-center gap-4 mt-8">

          <Link
            href="/projects"
            className="bg-[#ff715b] px-6 py-2 rounded-lg font-semibold hover:bg-[#ff5a40]"
          >
            View Projects
          </Link>

          <Link
            href="/sai.pdf"
            className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
            download
          >
            Download Resume
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Hero;
