import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='mt-15'>
        <h1 className='text-white text-6xl text-center mb-7 '>About me</h1>
        <p className='text-white text-justify w-[80vw] m-auto'>
            I'm a passionate and detail-oriented web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like Next.js. I love building clean, responsive, and user-friendly web applications that solve real-world problems. With a focus on continuous learning and creativity, I'm always exploring new technologies to improve both my code and user experience. 
        </p>
        <div className='bg-[#16232c] mt-5 flex justify-center'>

           <Link href={'https://github.com/saikingalgulwad'} target='_blank'><Image  className=" rounded-4xl m-4"src={'/github.png'} alt='Github' height={50} width={50}></Image></Link>

        </div>
    </div>
  )
}

export default Sidebar