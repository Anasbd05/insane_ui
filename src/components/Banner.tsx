import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] '>
        <div className='container'>
            <p className='font-medium '><span className='hidden sm:inline'>Introducing a completely redesigned interface - </span><Link href={"#"} className='underline underline-offset-4'>Explore the demo</Link>
            </p>
        </div>
    </div>
  )
}

export default Banner
