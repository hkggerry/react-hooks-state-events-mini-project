import React from "react";

function Task({tas}) {
  console.log(tas)

function handleDelete(){
  console.log("delete")
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
