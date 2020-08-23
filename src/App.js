import React from 'react';
import TaskTable from "./components/TaskTable";
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import TaskPage from "./components/TaskTable/TableCell/TaskPage";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/tasks/:id">
            <TaskPage />
          </Route>
          <Route exact path="/">
            <TaskTable/>
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
