import React from 'react'
import logo from '../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import NavItems from './NavItems';

function Navbar() {

    const menu = [
        {
            name:'Home',
            icon:HiHome
        },
        {
            name:'Search',
            icon:HiMagnifyingGlass
        },
        {
            name:'Watchlist',
            icon:HiPlus
        },
        {
            name:'Originals',
            icon:HiStar
        },
        {
            name:'Movies',
            icon:HiPlayCircle
        },
        {
            name:'Series',
            icon:HiTv
        }
    ]

  return (
    <div className=' flex justify-between py-3 px-5'>
        
        <div className='flex gap-8'>
            <img className='w-16 md:w-20 object-cover mr-10' src={logo} alt="logo" />
        
            {menu.map((item, index) => (
            <NavItems index={index} name={item.name} Icon={item.icon} />
            ))}
        </div>

        <img className='h-12 rounded-full w-12 object-cover' src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYjEwNjVhZmItMGQ1Ny00MjBkLTg0OGUtNjRhYjViMTJlMDdhLmpwZWc.webp" alt="Profile" />

    </div>
  )
}

export default Navbar