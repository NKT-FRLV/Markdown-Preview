import React from 'react'
import { HiSparkles, HiOutlineMenuAlt3, HiOutlineDownload, HiOutlineDuplicate, HiOutlineHeart } from 'react-icons/hi'
import ExampleSelector from './ExampleSelector'

interface HeaderProps {
  onSelectExample: (content: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectExample }) => {
  return (
    <div className='w-full flex items-center justify-between p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl backdrop-blur-sm animate-float relative z-10'>
      <div className='text-white text-2xl font-bold tracking-wide drop-shadow-lg animate-shimmer flex items-center gap-3'>
        <HiSparkles className="text-yellow-300 animate-pulse" size={28} />
        Markdown Preview
      </div>
      
      <div className='flex items-center gap-4'>
        <ExampleSelector onSelectExample={onSelectExample} />
        
        <div className='flex items-center gap-3'>
          <button className='bg-white/20 hover:bg-white/30 text-white p-3 rounded-full font-medium transition-colors transition-transform duration-200 transform hover:scale-105 origin-center backdrop-blur-sm border border-white/30 shadow-lg group'>
            <HiOutlineHeart className="group-hover:text-red-300 transition-colors duration-200" size={20} />
          </button>
          <button className='bg-white/20 hover:bg-white/30 text-white p-3 rounded-full font-medium transition-colors transition-transform duration-200 transform hover:scale-105 origin-center backdrop-blur-sm border border-white/30 shadow-lg group'>
            <HiOutlineDuplicate className="group-hover:text-blue-300 transition-colors duration-200" size={20} />
          </button>
          <button className='bg-white/20 hover:bg-white/30 text-white p-3 rounded-full font-medium transition-colors transition-transform duration-200 transform hover:scale-105 origin-center backdrop-blur-sm border border-white/30 shadow-lg group'>
            <HiOutlineDownload className="group-hover:text-green-300 transition-colors duration-200" size={20} />
          </button>
          <button className='flex items-center will-change-transform bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-medium transition-colors transition-transform duration-200 transform hover:scale-105 border border-white/30 backdrop-blur-sm shadow-lg gap-2'>
            <HiOutlineMenuAlt3 size={20} />
            Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
