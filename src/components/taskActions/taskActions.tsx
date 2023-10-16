import { createAction } from "@reduxjs/toolkit";
import { TASK } from "../Interfaces/interfaces";

export const addTask = createAction<TASK>("ADD_TASK");
export const updateTask = createAction<TASK>("UPDATE_TASK");
export const deleteTask = createAction<number>("DELETE_TASK");

export const moveTask = createAction<{
  taskId: number;
  newStatus: TASK["status"];
}>("MOVE_TASK");
