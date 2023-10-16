// src/reducers/taskReducer.ts
import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  updateTask,
  deleteTask,
  moveTask,
} from "../taskActions/taskActions";
import { AppState, TASK } from "../Interfaces/interfaces";

const initialState: AppState = {
  tasks: [],
};

export const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(updateTask, (state, action) => {
      // Actualizar una tarea existente en el estado

      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (taskToUpdate) {
        // Actualiza la tarea
        taskToUpdate.title = action.payload.title;
        taskToUpdate.assignedTo = action.payload.assignedTo;
        taskToUpdate.status = action.payload.status;
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      // Eliminar una tarea del estado
    })
    .addCase(moveTask, (state, action) => {
      // Mover una tarea a una nueva columna (estado)

      const taskToMove = state.tasks.find(
        (task) => task.id === action.payload.taskId
      );
      if (taskToMove) {
        // Actualiza el estado de la tarea
        taskToMove.status = action.payload.newStatus;
      }
    });
});
