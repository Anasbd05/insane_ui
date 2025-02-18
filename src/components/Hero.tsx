import {ArrowRightIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import cursorImage from '../app/assets/images/cursor.png'
import messageImage from '../app/assets/images/message.png'

const Hero = () => {
  return (
    <div className='bg-black  text-white relative overflow-clip py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] '>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] border bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-128px)] border-[#B48CDE] left-1/2 -translate-x-1/2 rounded-[100%] bg-black "></div>
      <div className="container relative">
        <div className='flex items-center justify-center '>
          <Link className='border py-1 px-2 inline-flex gap-3  rounded-lg border-white/30 ' href={"#"}>
            <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent'>Version 2.0 is here</span>
            <span className='inline-flex items-center gap-1'>
              <span>Read More</span>
              <ArrowRightIcon className='w-4 h-4' />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold inline-flex tracking-tighter text-center '>One Task <br /> at a Time</h1>
            <Image src={cursorImage} alt="" height={200} width={200} className='absolute right-[476px] top-[108px] hidden sm:inline  ' />
            <Image src={messageImage} alt="" height={200} width={200} className='absolute left-[498px] top-[56px] hidden sm:inline' />
          </div>
        </div>
        <p className='text-center text-xl mx-auto max-w-md mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, odit dicta eaque eligendi praesentium velit quos error vitae.</p>
        <div className="flex justify-center mt-8">
          <button className='bg-white font-medium py-3 px-5 rounded-lg text-black '>Get for free</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
