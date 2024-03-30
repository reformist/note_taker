import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <div className="note">
        <h1> {props.title} </h1>
        <p1> {props.content} </p1>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
