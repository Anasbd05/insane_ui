import {Layers} from 'lucide-react'
import React from 'react'

const Features = () => {

    const features = [
        {
            title: "Integration Ecosystem",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat labore minima veritatis illum? Ut consequuntur"
        },
        {
            title: "Goal Setting and Tracking",
            desc: "consectetur adipisicing elit. Iusto repellat labore minima veritatis illum? Ut consequuntur"
        },
        {
            title: "Secure Data Encryption",
            desc: "Lorem ipsum dolor sit adipisicing elit. Iusto repellat labore minima veritatis illum? Ut consequuntur"
        }
    ]
    return (
        <div className='bg-black text-white py-[72px] sm:py-24 '>
            <div className="container">
                <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
                <div className="maw-w-xl mx-auto">
                    <p className='text-center mt-5 text-xl text-gray-200  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat
                        labore minima veritatis illum? Ut consequuntur, recusandae dolor fugiat
                        quae quidem tenetur iste atque consectetur!
                    </p>
                </div>
                <div className='mt-16 flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {features.map((feature,index) => (
                        <div key={index} className='border border-gray-400 flex flex-col items-center px-5 py-10 text-center'>
                            <Layers className='text-black p-2 w-10 h-10 bg-white rounded-lg ' />
                            <h1 className='mt-6 font-bold'>{feature.title}</h1>
                            <p className='mt-2 text-white/70'>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
