import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Hreo() {
  return (
   <main>
    <div className='mt-3'>
    <h2 className='text-white text-center text-2xl font-bold mt-7 mb-2'>Hello<span className='text-3xl text-amber-400'>.</span></h2>
    <h3 className='text-white font-mono text-center text-2xl underline decoration-[#ff715b] underline-offset-4'>I'm Saiprasad</h3>
    <h2 className='text-white text-center text-4xl m-6'>Java Developer</h2>
    <div className='flex gap-2 justify-center-safe'>
    <Link className='text-white bg-[#ff715b] inline-block w-[120px] text-center p-1 rounded-[5px]' href={'/projects'}>My Projects</Link>
  <Link className='text-white inline-block w-[120px] text-center p-1 rounded-[5px] border-white border-1 ' href={'/sai.pdf'} download={'/sai.pdf'}> My resume</Link>
        </div></div>
        
   </main>
  )
}

export default Hreo
