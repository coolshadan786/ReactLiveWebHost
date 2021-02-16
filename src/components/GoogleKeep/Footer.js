import React from 'react';
import Keep from './Keep.module.css';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={Keep.footer}>
        <p>copyright © {year}</p>
      </footer>
    </>
  );
};

export default Footer;
