import React from 'react'

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;
    onSeek(newTime);
  };

  const progress = (currentTime / duration) * 100;
  
  

  const containerStyle = {
    width: "100%",
    backgroundColor: '#FF6347' ,
    borderRadius: '10px',
    overflow: 'hidden',
    height: '5px',
    cursor: 'pointer',

  };

  const barStyle = {
    width: `${progress}%`,
    backgroundColor:'#FF6347',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    lineHeight: '10px',
    transition: "width 0.2s ease",
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      <div style={barStyle}>
        
      </div>
    </div>
  );
};

export default ProgressBar;
