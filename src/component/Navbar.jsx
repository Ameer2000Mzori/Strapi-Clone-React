import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="w-[100%] h-[50px] bg-blue-500 text-white flex flex-row text-center items-center justify-center">
        <ul className=" flex flex-row text-center items-center justify-center gap-8 cursor-pointer">
          <li>
            <p>HOME</p>
          </li>
          <li>
            <p>ABOUT</p>
          </li>
          <li>
            <p>PRICING</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
