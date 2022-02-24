import React from "react";
import Task from "./Task";

function TaskList(props) {

  const itemList = <Task tas={props.tasks}/>

  return (
    <div className="tasks">
      {itemList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
