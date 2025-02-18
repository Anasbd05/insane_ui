import Image from 'next/image'
import React from 'react'
import screenShoot from "../app/assets/images/app-screen.png"

const Products = () => {
    return (
        <div className='bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-black to-[#5d2cabc0]'>
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                    <p className='text-xl text-center text-white/70 mt-5 '>
                        Lorem ipsum dolor sit, amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos incidunt fugiat voluptates modi tempora consectetur adipisicing elit. Illum non et dolore enim temporibus aut.
                    </p>
                </div>
                <Image className='mt-14' src={screenShoot} alt='' />
            </div>
        </div>
    )
}

export default Products
