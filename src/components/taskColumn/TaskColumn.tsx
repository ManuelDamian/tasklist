import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, TASK } from "../Interfaces/interfaces";
import { moveTask } from "../taskActions/taskActions";
import TaskCard from "../taskCard/TaskCard";

const TaskColumn: React.FC<{ status: TASK["status"] }> = ({ status }) => {
  const task = useSelector((state: AppState) =>
    state.tasks.filter((task) => task.status === status)
  );
  const dispatch = useDispatch();

  const handelDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskID");
    dispatch(moveTask({ taskId: parseInt(taskId), newStatus: status }));
  };

  return (
    <div className={`task-column ${status.toLowerCase()}`}>
      <h2>{status}</h2>
      {task.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskColumn;
