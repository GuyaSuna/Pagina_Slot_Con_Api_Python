'use client'
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import '../../../public/styles/juegoUno.scss';

const SlotMachine = () => {
  const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
  const num_icons = iconMap.length;
  const iconHeight = 79; // Height of each icon in pixels
  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0]);

  const animateReel = (reel, newIndex) => {
    gsap.to(reel, {
      backgroundPosition: `0 ${newIndex * iconHeight}px`, // Move background position downwards
      velocity: 50,
      duration: 2, // Duration of the animation
      onComplete: () => {
        // Animation complete
      },
    });
  };
  
 const rollAll = () => {
      const newIndexes = indexes.map(() => Math.floor(Math.random() * num_icons));

      const reelsList = document.querySelectorAll('.reel');
      const reelsArray = Array.from(reelsList); // Convert NodeList to array

      reelsArray.forEach((reel, i) => {
        animateReel(reel, newIndexes[i]);
      });

      setTimeout(() => {   
          setIndexes(newIndexes);     
      }, 2000);
    };


  return (
    <>
      <div className="slots">
        <div className={`reel ${iconMap[indexes[0]]}`}></div>
        <div className={`reel ${iconMap[indexes[1]]}`}></div>
        <div className={`reel ${iconMap[indexes[2]]}`}></div>
        <div className={`reel ${iconMap[indexes[3]]}`}></div>
        <div className={`reel ${iconMap[indexes[4]]}`}></div>
      </div>
      <button className="spin-button" onClick={() => rollAll()}>
        Girar
      </button>
      <div style={{ height: 500 }} />
    </>
  );
};

export default SlotMachine;

