import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const backToNorm = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToNorm}>
        <from>
          {expand ? (
            <input
              type="text"
              value={note.title}
              name="title"
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note"
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </from>
      </div>
    </>
  );
};

export default CreateNote;
