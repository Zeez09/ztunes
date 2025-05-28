import React from 'react'
import "./App.css"
import gradient from "./assets/images/gradient-bg-small.jpg"
import gradient2 from "./assets/images/gradient-bg.jpg"
import cover from "./assets/images/cover-2.jpg"
import ProgressBar from "./ProgressBar"
import playback from "./assets/images/Stop_and_play_fill-1.svg"
import pause from "./assets/images/play_fill.svg"
import forward from "./assets/images/Stop_and_play_fill.svg"

const App = () => {
  return (
    <>

<div className="relative w-full h-screen overflow-hidden">
      <img src={gradient} alt="" className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"  />
      <img src={gradient2} alt="" className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0" />



      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="p-2 sm:p-5 rounded-lg w-full sm:w-[400px] h-[600px] bg-black/40 backdrop-blur-md mx-4 sm:mx-auto text-white text-center">
        <div>
          <img src={cover} alt="" className='rounded-2xl w-full h-auto'/>
        </div>
        <h1 className='mt-3'>Forest lullaby</h1>
        <p>Lesfm</p>

        <div className='mt-10'>
          <ProgressBar/>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mt-7'>
          <button><img src={playback} alt="" /></button>
          <button><img src={pause} alt="" className='bg-red-400 p-2.5 rounded-full'/></button>
          <button><img src={forward} alt=""/></button>
        </div>

        </div>

      </div>
    </div>
      
    </>
  )
}

export default App
