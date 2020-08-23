import React from 'react';
import Button from "./components/Button";
import ModalPortal from "./components/Modals/ModalPortal/ModalPortal";
import styles from './components/Modals/ModalPortal/styles.module.sass';
import Modal from "./components/Modals/Modal";

function App() {
  return (
    <>
      {/*<Button text="Удалить" type="delete"/>*/}
      <ModalPortal className={styles.myModal}>
        <Modal type="edit"/>
      </ModalPortal>
    </>
  );
}

export default App;
