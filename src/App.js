import React from 'react';
import Button from "./components/Button";
import ModalPortal from "./components/Modals/ModalPortal/ModalPortal";
import styles from './components/Modals/ModalPortal/styles.module.sass';
import Modal from "./components/Modals/Modal";
import TaskTable from "./components/TaskTable";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        {/*<Button text="Удалить" type="delete"/>*/}
        {/*<ModalPortal className={styles.myModal}>*/}
        {/*  <Modal type="edit"/>*/}
        {/*</ModalPortal>*/}
        <TaskTable/>
      </Provider>
    </Router>
  );
}

export default App;
