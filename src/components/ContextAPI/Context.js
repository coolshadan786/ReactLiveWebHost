import React from 'react';
import { createContext } from 'react';
import CompA from './CompA';
const FirstName = createContext();
const LastName = createContext();
const Context = () => {
  return (
    <>
      <FirstName.Provider value={'Check Context'}>
        <LastName.Provider value={'of 2nd data Context'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Context;
export { FirstName, LastName };
