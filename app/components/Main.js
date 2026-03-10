import React from "react";

export default function Main() {

const skills = [
"HTML","CSS","JavaScript","Tailwind CSS",
"React.js","Next.js",
"Java","Spring Boot","Spring Security",
"Spring Data JPA","JDBC","SQL","Oracle","Git","REST APIs"
]

  return (
    <section className="bg-[#16232c] py-10 mt-10">

      <h2 className="text-center text-3xl font-bold text-white mb-8">
        My Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

        {skills.map((skill,index)=>(
          <div 
          key={index}
          className="bg-[#1e2d37] text-white p-4 rounded-lg text-center
          hover:bg-[#ff715b] transition duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}
