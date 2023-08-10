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
  }
];

export default function Header() {
  return (
    <header className="navbar navbar-expand-md navbar-dark bg-dark">
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
                  <button className="btn btn-outline-primary me-2 neonColors">{label}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
}
