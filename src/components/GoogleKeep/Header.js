import React from 'react';
import logo from '../../Images/Logo.jfif';
import Keep from './Keep.module.css';

const Header = () => {
  return (
    <>
      <div className={Keep.header}>
        <img src={logo} alt="logo" width="170" className={Keep.logo} />
        <h1 className={Keep.h1}>Lorem Keep</h1>
      </div>
    </>
  );
};

export default Header;
