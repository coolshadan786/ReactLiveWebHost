import React from 'react';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <div className="setStyle2">
        <h1>OOoooppppss !!! Page not Found !</h1>
        <h2>404 Error Page</h2>
        <p>Sorry,This page doesn't exist</p>
        <NavLink to="/">Go Back</NavLink>
      </div>
    </>
  );
};

export default Error;
