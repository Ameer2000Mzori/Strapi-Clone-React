import React, { createContext } from 'react'

export const NavListContext = createContext()

console.log(NavListContext)
const NavLists = ({ dataValues }) => {
  console.log(dataValues)

  return (
    <>
      <div className="w-[90%] h-[200px] bg-slate-400">
        <ul>
          {dataValues === 'HOME' ? (
            <>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">WHAT WE DO</a>
              </li>
              <li>
                <a href="#">PLANINGS</a>
              </li>
              <li>
                <a href="#">more</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default NavLists
