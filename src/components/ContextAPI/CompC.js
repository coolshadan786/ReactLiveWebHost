import React from 'react';
import { FirstName, LastName } from './Context';
const CompC = () => {
  return (
    <>
      {/* 1st way to use Context API other way createContext instead of useContext
      it have many issues while using for every context provide we use context consumer function */}
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My CompC component file {fname} and {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
