
import { Circle } from 'rc-progress';
import React from 'react';
import './css/CircularProgressBar.css';

const CircularProgressBar = () => {
  const percentage = 30;

  return (
    <div className="circular-progress-bar">
      {/* Circle component for circular progress */}
      <Circle
        percent={percentage}
        strokeColor="#ff1aff"
        strokeWidth={15}
        trailColor="#b3cccc"
        trailWidth={5}
        strokeLinecap="square"
        className="linebar"
      />
      {/* Text showing percentage and description */}
      <div className="percentage-text" style={{ marginTop: "25px", marginLeft: "10px" }}>
        <b>{percentage}%</b>
        <p style={{ fontSize: '9px' }}>Total New Customers</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;

/* CircularProgressBar.css */



