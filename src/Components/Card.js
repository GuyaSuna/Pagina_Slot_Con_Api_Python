import React from 'react';
import Link from 'next/link';
import '../../public/styles/styles.css'
const Card = (props) => {
  return (
    <div className="card custom-card custom-card-opacity">
      {/* Agrega el enlace al juego */}
      <Link href="../about">
       
          <img src={props.imagen} className="card-img-top custom-card-image" alt="..." />
        
      </Link>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>     
    </div>
  );
};

export default Card;
