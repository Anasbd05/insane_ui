"use client"
import Image from 'next/image'
import React from 'react'
import acmeLogo from "../app/assets/images/acme.png"
import celestialLogo from "../app/assets/images/celestial.png"
import echoLogo from "../app/assets/images/echo.png"
import pulseLogo from "../app/assets/images/pulse.png"
import quantumLogo from "../app/assets/images/quantum.png"
import apexLogo from "../app/assets/images/apex.png"
import {motion} from 'framer-motion'

const LogoTicker = () => {
    const Images = [acmeLogo,apexLogo,echoLogo,celestialLogo,quantumLogo,pulseLogo]

    return (
        <div className='bg-black text-white py-[72px] sm:py-24 '>
            <div className="container">
                <h2 className='text-xl text-center text-white/70'>Trusted By the world&#39;s innovative teams</h2>
                <div className='overflow-hidden mt-9 before:content-[""] after:content-[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0  before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] '>
                    <motion.div initial={{translateX: 0}} transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                        animate={{translateX: "-50%"}} className='flex gap-16 pr-16 flex-none'>
                        {Images.map((image,index) => (
                            <Image className='flex-none duration-500 hover:scale-105 h-8 w-auto' key={index} src={image} alt='' />
                        ))}
                        {Images.map((image,index) => (
                            <Image className='flex-none duration-500 hover:scale-105 h-8 w-auto' key={index} src={image} alt='' />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LogoTicker
