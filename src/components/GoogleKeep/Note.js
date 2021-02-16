import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Keep from './Keep.module.css';
import Card from '@material-ui/core/Card';

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className={Keep.Card}>
        <h1 className={Keep.title}>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
