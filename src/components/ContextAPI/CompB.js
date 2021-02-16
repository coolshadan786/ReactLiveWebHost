import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './Context';

const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      {/* 2nd way to use Context API other way useContext instead of createContext */}
      <h1>
        My CompC component file {fname} and {lname}
      </h1>
      {/* 1st way to use Context API other way createContext instead of useContext */}
      {/* <CompC /> */}
    </>
  );
};

export default CompB;
