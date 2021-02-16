import React from 'react';
const SearchResult = (props) => {
  const img = `https://source.unsplash.com/user/erondu/1000x600/?${props.name}`;
  return (
    <>
      <h1>Hello,I am a SearchResult Page</h1>
      <img src={img} alt="SearchResult" />
    </>
  );
};

export default SearchResult;
