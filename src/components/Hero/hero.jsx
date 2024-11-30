import './hero.css';
import { useState, useEffect } from 'react';

const images = [
  '../public/hero1.jpg',
  '../public/hero2.jpg',
  '../public/hero3.jpg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='simple-hero'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className='header-text'>
        <h5>Sewage treatment works</h5>
        <h1>Treating sewage before it is released<br /> into the environment</h1>
      </div>
      <div className='start-now'>
        <button>Booking service</button>
      </div>
    </div>
  );
};

export default Hero;
