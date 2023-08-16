import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import '../../public/styles/styles.css';

const Card = (props) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const cardTop = cardRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (cardTop < windowHeight - 50) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card custom-card custom-card-opacity ${isVisible ? 'visible' : ''}`}
    >
      {/* Agrega el enlace al juego */}
      <Link href="../about">
        <img src={props.imagen} className="card-img-top custom-card-image" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  );
};

export default Card;
