'use client'
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Email: info@holiwis.com</p>
          <p>Teléfono: +1 123-456-7890</p>
        </div>
        <div className="social-links">
          <h3>Síguenos en redes sociales</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/holiwis" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/holiwis" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/holiwis" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}