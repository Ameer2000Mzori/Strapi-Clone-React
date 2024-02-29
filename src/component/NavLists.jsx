import React, { useState } from 'react'

const NavLists = ({ dataValues }) => {
  const categoryLinks = {
    HOME: [
      { name: 'Community Edition', link: '/home-1' },
      { name: 'Enterprise Edition', link: '/home-2' },
      { name: 'Market Place', link: '/home-1' },
      { name: 'Cloud', link: '/home-2' },
      { name: 'Content type builders', link: '/home-1' },
      { name: 'Media', link: '/home-2' },
    ],
    ABOUT: [
      { name: 'Link 1 about', link: '/about-1' },
      { name: 'Link 2', link: '/about-2' },
    ],
    PRICING: [
      { name: 'Link 1 pricing', link: '/pricing-1' },
      { name: 'Link 2', link: '/pricing-2' },
    ],
  }

  return (
    <div className="w-full h-[400px]  rounded-md p-4">
      <div className="h-[10%]"></div>
      <div className="bg-blue-300 h-[90%] p-2 rounded-md">
        <ul className="flex space-x-4 ">
          {categoryLinks[`${dataValues}`].map((link) => (
            <li
              key={link.name}
              className="flex items-center justify-center cursor-pointer"
            >
              <a href={link.link} className="text-white hover:text-blue-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavLists
