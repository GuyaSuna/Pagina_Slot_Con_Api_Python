'use client'
import React, { useState } from 'react';
import '../../../public/styles/styles.css';

const SlotMachine = () => {
  const symbols = [
    { id: 1, symbol: '🍒', points: 10 },
    { id: 2, symbol: '🍊', points: 20 },
    { id: 3, symbol: '🍇', points: 30 },
    { id: 4, symbol: 'Ea', points: 40 },
    { id: 5, symbol: 'Jiji', points: 50 },
    { id: 6, symbol: 'B)', points: 60 },
    { id: 7, symbol: 'Joker', points: 100 }
  ];

  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([...Array(15)].map(() => symbols[Math.floor(Math.random() * symbols.length)]));

  const handleSpin = () => {
    setSpinning(true);

    const interval = setInterval(() => {
      const newReels = [...reels];
      for (let i = 0; i < newReels.length; i++) {
        newReels[i] = symbols[Math.floor(Math.random() * symbols.length)];
      }
      setReels(newReels);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      checkWin(reels);
      setSpinning(false);
    }, 2500);
  };

  const checkWin = (reels) => {
    const winCombinations = [
      [0, 1, 2],
      [5, 6, 7],
      [10, 11, 12]
    ];

    let winningPoints = 0;

    for (const combination of winCombinations) {
      if (
        reels[combination[0]].symbol === reels[combination[1]].symbol &&
        reels[combination[1]].symbol === reels[combination[2]].symbol
      ) {
        const winningSymbol = reels[combination[0]].symbol;
        winningPoints += reels.find((reel) => reel.symbol === winningSymbol).points;
      }
    }

    if (winningPoints > 0) {
      alert(`¡Has ganado ${winningPoints} puntos!`);
    }
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        {[0, 1, 2].map((row) => (
          <div key={row} className={`reel-line ${spinning ? 'spinning' : ''}`}>
            {[0, 1, 2, 3, 4].map((column) => (
              <div id={row * 5 + column} className={`reel-cell ${spinning ? 'spinning' : ''}`}>
                <div className={`symbol ${spinning ? 'spinning' : ''}`}>
                  <span id={reels[row * 5 + column].symbol}>{reels[row * 5 + column].symbol}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={handleSpin} disabled={spinning}>
        {spinning ? 'Girando...' : 'Girar'}
      </button>
    </div>
  );
};

export default SlotMachine;
