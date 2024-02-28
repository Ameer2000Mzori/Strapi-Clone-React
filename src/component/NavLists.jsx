import React from 'react'

const NavLists = ({ dataValues }) => {
  console.log(dataValues)

  return (
    <div className="w-full h-[200px]">
      <div className="h-[10%]"></div>
      <div className="bg-blue-300 h-[80%] rounded-md">
        <ul className="flex flex-row flex-wrap text-start items-start p-4 justify-start gap-4">
          {dataValues === 'HOME' ? (
            <>
              <h1>home</h1>
              <h1>about</h1>
              <h1>pricing</h1>
            </>
          ) : (
            <>
              <h1>things</h1>
              <h1>stuff</h1>
              <h1>more stuff</h1>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default NavLists
