import React from "react";
import Task from "./Task";

function TaskList(props) {
  
  const itemList = props.tasks.map((task, index)=>{
    return <Task key={index} tas={task}/>
  })

  return (
    <div className="tasks">
      {itemList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
