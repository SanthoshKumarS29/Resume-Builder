import React from 'react'
import { VscNotebook } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between p-4'>
        <Link to='/' className='flex items-center gap-2'>
            <b className='text-blue-400'><VscNotebook size={34}/></b>
            <b className='text-base md:text-2xl lg:text-3xl'>Resume Builder</b>
        </Link>
        <div className='flex items-center gap-1 md:gap-4'>
            <div className='flex items-center gap-2'>
                <b className='cursor-pointer'><IoIosContact size={34}/></b>
            </div>
            <button type='button' className='border-2 border-black bg-black text-white px-3 py-1 text-base font-bold rounded-lg hover:bg-white hover:text-black duration-200'>
                <Link to='/login'>Login</Link>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Navbar