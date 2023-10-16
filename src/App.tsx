import "./App.css";
import TaskBoard from "./components/taskBoard/TaskBoard";
import { Provider } from "react-redux";
import store from "./components/store/store.tsx";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1> Apliccion de Taras</h1>
        <TaskBoard />
      </Provider>
    </div>
  );
}

export default App;
