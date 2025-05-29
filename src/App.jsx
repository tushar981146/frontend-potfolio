import React, { useEffect } from "react"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"



function App() {

  




  return (
    <div className="h-full min-h-screen w-full overflow-x-hidden flex flex-col">
      <NavBar />
      {/* <Home /> */}
      {/* Ensure Outlet is inside a full-width div */}
      <div className="w-full flex-1">
        <Outlet />
      </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
