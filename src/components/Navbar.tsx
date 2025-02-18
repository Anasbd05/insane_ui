import Image from 'next/image'
import React from 'react'
import logoImage from "@/app/assets/images/logosaas.png"
import Link from 'next/link'
import {AlignJustify} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container px-4'>
        <div className='py-4 flex items-center justify-between'>
          <div className="relative">
            <div className="absolute w-full  top-2 bottom-0 blur-md bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] "></div>
            <Image src={logoImage} alt='' className='relative w-12 h-12' />
          </div>
          <AlignJustify className='text-white flex sm:hidden h-10 w-10 ' />
          <nav className='sm:flex hidden gap-6 items-center '>
            <Link href={"#"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</Link>
            <Link href={"#"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</Link>
            <Link href={"#"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</Link>
            <Link href={"#"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Costumers</Link>
            <Link href={"#"} className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</Link>
            <button className='bg-white text-black rounded-lg py-2 px-4 hover:bg-gray-300'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
