import { useState, useEffect } from 'react';
import one from '../../../assets/Options/animation/one.svg';
import two from '../../../assets/Options/animation/two.svg';
import three from '../../../assets/Options/animation/three.svg';

const images = [one, two, three];

export default function Animation() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full ml-[15%]">
      <p className='opacity-0'>King</p>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`imag-${index}`}
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: images.length - index, pointerEvents: index === currentImage ? 'auto' : 'none' }}
        />
      ))}
    </div>
  );
}
