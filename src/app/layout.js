'use client'

if (typeof document !== 'undefined') {
  require('bootstrap/dist/css/bootstrap.min.css');
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}

import { Inter } from 'next/font/google';
import React from 'react';
import { Header } from '@/Components/Header';
import '../../public/styles/styles.css';
import Footer from '../Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer />
   </div>
   
  );
}