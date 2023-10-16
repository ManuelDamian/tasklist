import React from "react";
import { useDispatch } from "react-redux";
import TaskColumn from "../taskColumn/TaskColumn";

const TaskBoard: React.FC = () => {
  const dispatch = useDispatch();

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: number
  ) => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  return (
    <div className="task-board">
      <TaskColumn status="ToDo" />
      <TaskColumn status="Blocked" />
      <TaskColumn status="InProgress" />
      <TaskColumn status="InReview" />
      <TaskColumn status="Complete" />
    </div>
  );
};

export default TaskBoard;
