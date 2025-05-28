import React from 'react'

const ProgressBar = () => {
  

  const containerStyle = {
    width: "100%",
    backgroundColor: '#FF6347' ,
    borderRadius: '10px',
    overflow: 'hidden',
    height: '5px',
    cursor: 'pointer',

  };

  const barStyle = {
    
    backgroundColor:'#FF6347',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    lineHeight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={barStyle}>
        
      </div>
    </div>
  );
};

export default ProgressBar
