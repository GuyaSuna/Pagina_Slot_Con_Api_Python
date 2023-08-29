'use client'
import React from 'react';

import Card from '../Components/Card';

const imagenes = [
  'https://i0.wp.com/fuencarralelpardo.com/wp-content/uploads/2019/07/casino-3491253_1280.jpg?fit=1280%2C853&ssl=1',
  'https://i0.wp.com/fuencarralelpardo.com/wp-content/uploads/2019/07/casino-3491253_1280.jpg?fit=1280%2C853&ssl=1',
  'https://i0.wp.com/fuencarralelpardo.com/wp-content/uploads/2019/07/casino-3491253_1280.jpg?fit=1280%2C853&ssl=1',
  'https://curiosfera-historia.com/wp-content/uploads/Historia-de-las-m%C3%A1quinas-tragaperras-1.jpg',
  'https://casinoalto.com/wp-content/uploads/2017/12/tragaperras-como-funcionan.webp',
  'https://i0.wp.com/fuencarralelpardo.com/wp-content/uploads/2019/07/casino-3491253_1280.jpg?fit=1280%2C853&ssl=1',
  'https://casinoalto.com/wp-content/uploads/2017/12/tragaperras-como-funcionan.webp',
  'https://casinoalto.com/wp-content/uploads/2017/12/tragaperras-como-funcionan.webp',
];


export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/Video/FondoApp.mp4" type="video/mp4" />
      </video>

      {/* Agregar el div con el overlay y el nombre de la app */}
      <div style={{ height: '550px' }}>
        <div
          style={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '80%',
            maxWidth: '400px',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '8px',
            color: '#fff',
            zIndex: 1, // Asegura que esté por encima del video
          }}
        >
          <h1 className="neonText">App Prueba slot</h1>
          <p className="neonText">Animate a jugar y ganar!!!</p>          
        </div>
      </div>

      {/* Cards */}
      <div className="row row-cols-2 g-4">
        {imagenes.map((image, index) => (
          <div key={index} className="col">
            <Card imagen={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

