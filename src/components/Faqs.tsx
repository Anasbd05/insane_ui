import React from 'react'

const Faqs = () => {

    const items = [
        {
            question: "What payment methos do you accept",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum amet ducimus unde?"
        },
        {
            question: "How does the pricing work for teams",
            answer: "Lorem, ipsum dolor sit amet adipisicing elit. Illum amet ducimus unde?"
        },
        {
            question: "Can I change my plan later?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum amet ducimus unde?"
        },
        {
            question: "Is My data secure?",
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum amet ducimus unde?"
        }
    ]

    return (
        <div className='bg-gradient-to-b from-[#5D2CAB] to-black text-white py-[72px] sm:py-24'>
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter font-bold'>Frequently asked questions</h2>
                <div className='mt-12'>
                    {items.map((item,index) => (
                        <div key={index} className="collapse border-b border-white/30 py-7 w-full max-w-[648px] mx-auto ">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl flex-1 font-medium">{item.question}</div>
                            <div className="collapse-content">
                                <p className=' mt-4  '>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs
