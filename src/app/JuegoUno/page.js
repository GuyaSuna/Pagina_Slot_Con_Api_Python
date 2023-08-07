'use client'
import React, { useState } from 'react';
import '../../../public/styles/styles.css'


const SlotMachine = () => {
  const [reels, setReels] = useState(['🍒', '🍊', '🍇']); 
  const [spinning, setSpinning] = useState(false); // Estado para controlar si los carretes están girando

  // Función para iniciar el giro de los carretes
  const handleSpin = () => {
    setSpinning(true);

    // Simular un tiempo de giro (puedes ajustar la duración según desees)
    setTimeout(() => {
      setSpinning(false);
      // Generar una combinación aleatoria de símbolos para los carretes
      const randomReels = reels.map(() => reels[Math.floor(Math.random() * reels.length)]);
      setReels(randomReels);
    }, 2000); // Duración del giro en milisegundos

    
  };
  const handlePrueba = () => {
    console.log("Tupu");
    alert("eaaaa");
  };

  return (
    <div className="slot-machine">
      <div style={{ fontSize: '40px', display: 'flex', justifyContent: 'center' }}>
        {reels.map((symbol, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            {spinning ? '🎰' : symbol}
          </div>
        ))}
      </div>
      <button onClick={handleSpin} disabled={spinning}>
        {spinning ? 'Girando...' : 'Girar'}
      </button>
      <button onClick={handlePrueba}>
            Jiji
      </button>
    </div>
  );
};

export default SlotMachine;
