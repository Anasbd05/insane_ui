import {FacebookIcon,Instagram,TwitterIcon,YoutubeIcon} from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-5 bg-black px-10 border-t border-white/20 text-white'>
            <div className="container">
                <div className='flex flex-col sm:flex-row gap-4  items-center justify-between'>
                    <p>&copy; 2025 Copyright. All rights are reserved</p>
                    <ul className='flex gap-2.5 justify-center'>
                        <Instagram className='hover:bg-gray-500 w-8 h-8 hover:text-black rounded-lg p-1' />
                        <TwitterIcon className='hover:bg-gray-500 w-8 h-8 hover:text-black rounded-lg p-1' />
                        <FacebookIcon className='hover:bg-gray-500 w-8 h-8 hover:text-black rounded-lg p-1' />
                        <YoutubeIcon className='hover:bg-gray-500 w-8 h-8 hover:text-black rounded-lg p-1' />
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
