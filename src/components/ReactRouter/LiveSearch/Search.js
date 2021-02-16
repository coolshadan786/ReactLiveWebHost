import React, { useState } from 'react';
import SearchResult from './SearchResult';
const Search = () => {
  const [img, setImg] = useState('');
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <h1>Hello,I am a Search Page</h1>
        <input
          type="text"
          placeholder="Enter Anything"
          onChange={inputEvent}
          value={img}
        />
        {img === '' ? null : <SearchResult name={img} />}
      </div>
    </>
  );
};

export default Search;
