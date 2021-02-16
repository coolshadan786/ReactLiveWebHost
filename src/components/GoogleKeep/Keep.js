import React from 'react';
import { useState } from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const Keep = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert('I am Clicked');
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currentData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Keep;
