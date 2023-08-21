'use client'
import React, { useState } from 'react';
import { gsap } from 'gsap';
import '../../../public/styles/juegoUno.scss';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const SlotMachine = () => {
  const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
  const num_icons = iconMap.length;
  gsap.registerEase(CustomEase)
  const iconHeight = 78;
  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0]);
  const [isSpinning, setIsSpinning] = useState(false); // Added state for tracking spin status

  const animateReel = (reel, newIndex) => {
    gsap.to(reel, {
      backgroundPosition: `0 ${newIndex * iconHeight}px`,
      duration: 2, // Shorten the duration for the reel stopping animation
       ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.048,0.826 0.206,0.974 0.23,0.997 0.29,1.043 0.32,1.028 0.379,0.996 0.456,1 0.538,1 0.718,1 0.893,1 1,1 "),
      onComplete: () => {
        // Animation complete
      },
    });
  };

  const startLoop = () => {
    const newIndexes = indexes.map(() => Math.floor(Math.random() * num_icons) + 1);

    const reelsList = document.querySelectorAll('.reel');
    const reelsArray = Array.from(reelsList);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsSpinning(false); // Set spinning status to false after 2 seconds of looping
        setTimeout(() => {
          tl.kill(); // Kill the timeline after the loop
        }, 4000);
      },
    });

    reelsArray.forEach((reel, i) => {
      tl.to(reel, {
        backgroundPosition: `0 ${newIndexes[i] * -iconHeight * 5}px`,
        ease: "power2.in",
        onComplete: () => {
          animateReel(reel, newIndexes[i]);
        },
      });
    });

  
    tl.totalDuration(2);

    setIndexes(newIndexes);
    tl.play();
  };

  const rollAll = () => {
    if (isSpinning) {
      return; // Avoid starting another spin if already spinning
    }

    setIsSpinning(true);
    startLoop();
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
      <button className="spin-button" onClick={() => rollAll()} disabled={isSpinning}>
        {isSpinning ? 'Girando...' : 'Girar'}
      </button>
      <div style={{ height: 500 }} />
    </>
  );
};

export default SlotMachine;
