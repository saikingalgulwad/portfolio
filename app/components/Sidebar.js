import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <section className="py-16 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-white text-5xl font-bold mb-8">
          About <span className="text-[#ff715b]">Me</span>
        </h1>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
          I'm a passionate full-stack developer with experience in building
          modern web applications using Next.js, React, Tailwind CSS, and
          Java Spring Boot. I enjoy creating scalable backend systems and
          clean, responsive user interfaces. I'm always learning new
          technologies to improve performance, usability, and developer
          experience.
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-6 mt-8">

          <Link
            href="https://github.com/saikingalgulwad"
            target="_blank"
            className="bg-[#16232c] p-3 rounded-full hover:bg-[#ff715b] transition"
          >
            <Image
              src="/github.png"
              alt="Github"
              width={35}
              height={35}
            />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="bg-[#16232c] p-3 rounded-full hover:bg-[#ff715b] transition"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={35}
              height={35}
            />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Sidebar;
