import React, { useEffect, useState, useRef } from 'react'
import "./App.css"
import gradient from "./assets/images/gradient-bg-small.jpg"
import gradient2 from "./assets/images/gradient-bg.jpg"

import ProgressBar from "./ProgressBar"
import playback from "./assets/images/Stop_and_play_fill-1.svg"
import play from "./assets/images/play_fill.svg"
import forward from "./assets/images/Stop_and_play_fill.svg"
import songs from "./data/Songs"
import pause from "./assets/images/icons8-pause-30.png"

const App = () => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const currentSong = songs[currentIndex];

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
  };
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setPlaying(false);
    setCurrentTime(0);
};


const formatTime = (time) => {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setPlaying(false);
    setCurrentTime(0);
  };


  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentIndex]);

useEffect (() => {
  if (playing) {
      audioRef.current.play();
    }
  }, [currentIndex]);









  return (
    <>

<div className="relative w-full h-screen overflow-hidden">
      <img src={gradient} alt="" className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"  />
      <img src={gradient2} alt="" className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0" />
      <audio ref={audioRef} src={currentSong.src} />



      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="p-2 sm:p-5 rounded-lg w-full sm:w-[400px] h-[600px] bg-black/40 backdrop-blur-md mx-4 sm:mx-auto text-white text-center">
        <div>
          <img src={currentSong.cover} alt="" className='rounded-2xl w-full h-auto'/>
        </div>
        <h1 className='mt-3'>{currentSong.title}</h1>
        <p>{currentSong.artist}</p>

        <div className='mt-10'>
          <ProgressBar currentTime={currentTime} duration={duration} onSeek={handleSeek}/>
          <div className="flex justify-between text-sm mt-2 px-1 text-white/80">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mt-7'>
          <button className='hover:bg-white/20 rounded-full transition duration-200' onClick={handlePrevious}><img src={playback} alt="" /></button>
          <button  onClick={handlePlayPause}><img src={playing ? pause : play} alt="" className='bg-red-400 p-2.5 rounded-full'/></button>
          <button className='hover:bg-white/20 rounded-full transition duration-200' onClick={handleNext} ><img src={forward} alt="" /></button>
        </div>

        </div>

      </div>
    </div>
      
    </>
  )
}

export default App
