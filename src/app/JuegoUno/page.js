'use client'
import React, { useState , useEffect } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import '../../../public/styles/juegoUno.scss';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const SlotMachine = () => {
  const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
  const [images, setImages] = useState([]);
  const [orders, setOrders] = useState([]);
  
  const num_icons = iconMap.length;
  gsap.registerEase(CustomEase)
  const iconHeight = 78;
  const [indexes, setIndexes] = useState([0, 0, 0, 0, 0]);
  const [isSpinning, setIsSpinning] = useState(false); 
  const [order , setOrder] = useState([])

  const animateReel = (reel, newIndex) => {
    gsap.to(reel, {
      backgroundPosition: `0 ${newIndex * iconHeight}px`,
      duration: 2, 
       ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.048,0.826 0.206,0.974 0.23,0.997 0.29,1.043 0.32,1.028 0.379,0.996 0.456,1 0.538,1 0.718,1 0.893,1 1,1 "),
      onComplete: () => {
      },
    });
  };
  useEffect(() => {
    async function fetchImagesAndOrders() {
      try {
        const response = await fetch('http://localhost:5000/get_images_and_orders');
        const data = await response.json();
        setImages(data.images_urls);
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchImagesAndOrders();
  }, []);
  const startLoop = () => {
    const newIndexes = indexes.map(() => Math.floor(Math.random() * num_icons) + 1);

    const reelsList = document.querySelectorAll('.reel');
    const reelsArray = Array.from(reelsList);

    const tl = gsap.timeline({

      onComplete: () => {
        
        setIsSpinning(false);
        setTimeout(() => {
          tl.kill(); 
        }, 100);
      },
    });

    reelsArray.forEach((reel, i) => {
      tl.to(reel, {
        backgroundPosition: `0 ${newIndexes[i] * -iconHeight * 5}px`,
        ease: "power4.in",
        onComplete: () => {
          animateReel(reel, newIndexes[i]);
        },
      });
    });

  
    tl.totalDuration(2);

    setIndexes(newIndexes);
    tl.play();
  };

const rollAll = async () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    try {
      const response = await fetch('http://localhost:5000/get_images_and_orders');
      const data = await response.json();

      const newImages = data.images_urls;
      const newOrders = data.orders;

      const newIndexes = indexes.map(() => Math.floor(Math.random() * num_icons));
      
      setIndexes(newIndexes);
      setImages(newImages);
      setOrders(newOrders);

      // Reiniciar las animaciones
      const reelsList = document.querySelectorAll('.reel');
      const reelsArray = Array.from(reelsList);
    startLoop(); // Iniciar la animación después de reiniciar las posiciones


     
       
        setIsSpinning(false);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsSpinning(false);
    }
  };

  return (
    <>
<div className="slots">
  {images.map((imageUrl, index) => (
    <div
      key={index}
      className={`reel ${iconMap[indexes[index]]}`}
      style={{ backgroundImage: `url(/Imagenes/${imageUrl})` }} // Cambia aquí
    ></div>
  ))}
</div>


      <button className="spin-button" onClick={() => rollAll()} disabled={isSpinning}>
        {isSpinning ? 'Girando...' : 'Girar'}
      </button>
      <div style={{ height: 500 }} />
    </>
  );
};

export default SlotMachine;
