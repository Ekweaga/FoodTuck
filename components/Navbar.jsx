import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <>
    <nav className='bg-black text-white h-[50px] flex  items-center justify-around'>
        <div>
            <h1 className='text-2xl ml-[0px] font-bold'>Food<span className='text-[#195A00] '>tuck</span></h1>
        </div>

        <div>
          <ul className="flex gap-[30px] text-white text-sm px-3">
            <li className='text-[#195A00] '>
              Home
            </li>
            <li>
              About Us
            </li>
            <li>
              Shop
            </li>
            <li>
              Menu
            </li>
            <li>
              Our Chefs
            </li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar