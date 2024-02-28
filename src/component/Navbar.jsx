import React, { useState, useContext } from 'react'
import { NavListContext } from './NavLists.jsx'
import NavLists from './NavLists.jsx'

const Navbar = () => {
  const [userIsHovering, setUserIsHovering] = useState(false)
  const [dataValues, setDataValues] = useState('')
  const contextValue = useContext(NavListContext)

  const handleMouseEnter = (dataVal) => {
    setDataValues(dataVal)
    setUserIsHovering(true)
  }

  return (
    <div onMouseLeave={() => setUserIsHovering(false)} className="relative">
      <nav className="w-full h-12 bg-blue-500 text-white flex justify-center items-center ">
        <ul
          onMouseLeave={() => setUserIsHovering(false)}
          className="flex items-center justify-center gap-8 cursor-pointer h-[100%]"
        >
          <li data-value="HOME" onMouseEnter={() => handleMouseEnter('HOME')}>
            <p>HOME</p>
          </li>
          <li data-value="ABOUT" onMouseEnter={() => handleMouseEnter('ABOUT')}>
            <p>ABOUT</p>
          </li>
          <li
            data-value="PRICING"
            onMouseEnter={() => handleMouseEnter('PRICING')}
          >
            <p>PRICING</p>
          </li>
        </ul>
      </nav>
      {userIsHovering && (
        <div onMouseEnter={() => setUserIsHovering(true)}>
          <NavLists dataValues={dataValues} />
        </div>
      )}
    </div>
  )
}

export default Navbar
