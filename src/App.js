// App.js
import React from 'react'
import Home from './component/Home.jsx'
import Navbar from './component/Navbar.jsx'
import { NavListContext } from './component/NavLists.jsx'

function App() {
  return (
    <>
      <NavListContext.Provider value={{ name: 'Ameer' }}>
        <Navbar />
        <Home />
      </NavListContext.Provider>
    </>
  )
}

export default App
