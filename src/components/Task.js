import React from "react";

function Task({tas, onDelete}) {
  console.log(tas)

function handleDelete(){
  onDelete(tas.text)
}

  return (
    <div className="task">
      <div className="label">{tas.category}</div>
      <div className="text">{tas.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
