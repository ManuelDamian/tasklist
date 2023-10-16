import React from "react";
import { TASK } from "../Interfaces/interfaces";

const TaskCard: React.FC<{ task: TASK }> = ({ task }) => {
  return (
    <div className={`task-card ${task.status.toLowerCase()}`}>
      <h3>{task.title}</h3>
      {task.assignedTo && <p> Asignado a: {task.assignedTo}</p>}
    </div>
  );
};

export default TaskCard;
