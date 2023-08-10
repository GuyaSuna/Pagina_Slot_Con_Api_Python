


  require('bootstrap/dist/css/bootstrap.min.css');
 

import { Inter } from 'next/font/google';
import React from 'react';
import  Header  from '../Components/Header';
import '../../public/styles/styles.css';
import Footer from '../Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
        <body className={inter.className}>
             <Header/>
          {children}
             <Footer />
          </body>
 
   </html>
   
  );
}