import React, { useState, useEffect } from 'react';
import '../../public/styles/styles.css';

const images = [
  'https://curiosfera-historia.com/wp-content/uploads/Historia-de-las-m%C3%A1quinas-tragaperras-1.jpg',
  'https://i0.wp.com/fuencarralelpardo.com/wp-content/uploads/2019/07/casino-3491253_1280.jpg?fit=1280%2C853&ssl=1',
  'https://casinoalto.com/wp-content/uploads/2017/12/tragaperras-como-funcionan.webp',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const nextImage = (currentImage + 1);
    const timeout = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item${index === currentImage ? ' active' : ''}`}
        >
          <img src={image} className="carousel-image" alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <button className="carousel-control-prev" onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;