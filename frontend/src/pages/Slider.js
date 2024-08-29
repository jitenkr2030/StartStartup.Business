import React from 'react';
import './Slider.css';  // Import the CSS for styling the slider

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide">
        <img src="https://via.placeholder.com/1000x300" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="https://via.placeholder.com/1000x300" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="https://via.placeholder.com/1000x300" alt="Slide 3" />
      </div>
    </div>
  );
};

export default Slider;
