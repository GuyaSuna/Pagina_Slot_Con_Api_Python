'use client'
import React, { useState } from 'react';

const Page = () => {
  const [cards, setCards] = useState([
    { id: 1, flipped: false, prize: true },
    { id: 2, flipped: false, prize: false },
    { id: 3, flipped: false, prize: false },
    { id: 4, flipped: false, prize: false },
  ]);

  const [wonPrize, setWonPrize] = useState(false); // New state for tracking winning

  const handleCardClick = (cardId) => {
    if (wonPrize) {
      // If a prize was won, flip all cards
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, flipped: true }))
      );
    } else {
      // Otherwise, handle card click as before
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === cardId ? { ...card, flipped: true } : card
        )
      );     
      if (cards[cardId - 1].prize) {
        setWonPrize(true);
      }
    }
  };

  const resetGame = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        flipped: false,
      }))
    );
    setWonPrize(false); // Reset the winning state
  };

  return (
    <div className="page-container">
      <div className="overlay"></div>
      <div className="game-container">
        {cards.map((card) => (
          <div key={card.id} className={`cardita ${card.flipped ? 'flipped' : ''}`}>
            <div
              className="cardita-content"
              onClick={() => (card.flipped ? (wonPrize === true ? resetGame() : null) : handleCardClick(card.id))}
            >
              {card.flipped ? (
                <img
                  className='cardita-image'
                  src={card.prize ? 'https://e7.pngegg.com/pngimages/747/420/png-clipart-logo-green-line-line-angle-rectangle.png' : 'https://us.123rf.com/450wm/photoart23d/photoart23d1902/photoart23d190201517/117662503-marcas-de-verificaci%C3%B3n-icono-de-cruz-roja-degradado-ilustraci%C3%B3n-vectorial.jpg'}
                  alt=""
                />
              ) : (
                '🔒'
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
