import React from "react";

const List = ({ task, deleteTask, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };
  return (
    <div className="list">
      <li
        className={task.completed ? "checked" : ""}
        onClick={() => handleChange()}
      >
        {task.text}
      </li>
      <span className="deleteBtn" onClick={() => deleteTask(task.id)}>
        x
      </span>
    </div>
  );
};

export default List;
