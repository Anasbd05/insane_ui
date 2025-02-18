import React from 'react'
import emojieStar from "../app/assets/images/emojistar.png"
import helix2 from "../app/assets/images/helix2.png"
import Image from 'next/image'

const CallAction = () => {
    return (
        <div className='bg-black text-white py-[72px] sm:py-24 text-center '>
            <div className="container max-w-xl relative">
                <Image className='absolute  hidden sm:flex top-6 left-[calc(100%+36px)] ' src={emojieStar} alt='' />
                <Image className='absolute hidden sm:flex  -top-[120px] right-[calc(100%+24px)] ' src={helix2} alt='' />
                <h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
                    Get instant access
                </h2>
                <p className='text-xl text-white/70 mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eius, corporis tempora temporibus neque magnam.
                </p>
                <form className='mt-10 flex flex-col sm:flex-row max-w-sm mx-auto gap-2.5'>
                    <input type="email" className='h-12 bg-white/20 sm:flex-1 rounded-lg px-5 font-medium placeholder:text-gray-500 ' placeholder='your@gmail.com' />
                    <button className='bg-white hover:bg-white/80 px-5 text-black h-12 rounded-lg'>Get access</button>
                </form>
            </div>
        </div>
    )
}

export default CallAction
