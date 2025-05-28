import React from 'react'
import "./App.css"
import gradient from "./assets/images/gradient-bg-small.jpg"
import gradient2 from "./assets/images/gradient-bg.jpg"


const App = () => {
  return (
    <>

<div className="fixed inset-0 z-[-1]">
      <img src={gradient} alt="" className="block sm:hidden w-full h-full"  />
      <img src={gradient2} alt="" className="hidden sm:block w-full h-full" />
    </div>
      
    </>
  )
}

export default App
