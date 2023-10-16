import { combineReducers } from "redux";
import { taskReducer } from "../taskReducer/taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  // Otros reductores si los tienes
});

export default rootReducer;
