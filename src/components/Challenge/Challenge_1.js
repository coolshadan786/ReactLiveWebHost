import React, { useState, useEffect } from 'react';

const Challenge_1 = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    return () => {
      alert('Hello');
      document.title = `You Clicked me ${num}`;
    };
  });
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </>
  );
};

export default Challenge_1;
