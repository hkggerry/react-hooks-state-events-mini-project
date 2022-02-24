import React from "react";

function Task({tas}) {
  console.log(tas)

  return (
    <div className="task">
      <div className="label">{tas.category}</div>
      <div className="text">{tas.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
