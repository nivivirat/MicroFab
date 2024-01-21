import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../Stylesq.css'; // Add your styling for the slider

const Slider = ({ images, autoScrollInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [currentIndex, autoScrollInterval, images.length]);

  return (
    <div className="slider-container">
      <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoScrollInterval: PropTypes.number.isRequired,
};

export default Slider;
