import React from 'react';
import Button from "./components/Button";
import TaskTable from "./components/TaskTable";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        {/*<Button text="Удалить" type="delete"/>*/}
        <TaskTable/>
      </Provider>
    </Router>
  );
}

export default App;
