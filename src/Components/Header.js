'use client'
import React from 'react';
import Link from 'next/link';
import '../../public/styles/styles.css';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'JuegoUno',
    route: '/JuegoUno',
  },
  {
    label: 'JuegoCartas',
    route: '/SearchGame',
  }
];

export default function Header() {
  return (
    <header className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <div className="navbar-icon">
          <img src="https://centrodepsicologiaintegral.com/wp-content/uploads/2018/10/traga.jpg" alt="Logo" width="40" height="32" />
        </div>
        <Link href="/" className="navbar-brand">
          <span className="brand-name">La Bombonera</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map(({ label, route }) => (
              <li key={route} className="nav-item">
                <Link href={route}>
                  <button className="btn">{label}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
