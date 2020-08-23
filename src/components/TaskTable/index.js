import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from './styles.module.sass';
import modalStyles from '../Modals/ModalPortal/styles.module.sass'

import Button from "../Button";
import {getListSC} from "../../redux/actionCreators/actionCreators";
import ModalPortal from "../Modals/ModalPortal/ModalPortal";
import TableCell from "./TableCell";
import CreateModal from "../Modals/CreateModal";

function TaskTable() {
  const taskList = useSelector(state => state.main.taskList);
  const isFetching = useSelector(state => state.main.isFetching);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(state => !state);
  }

  useEffect(() => {
    dispatch(getListSC());
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Список задач</h3>
        <Button type="create" text="Добавить" onClick={handleShow}/>
        {showModal &&  <ModalPortal className={modalStyles.myModal}>
          <CreateModal handleShow={handleShow}/>
        </ModalPortal>}
      </div>
      {isFetching
        ? <span>Загрузка...</span>
        : <table className={styles.table}>
          <tbody>
          {taskList && taskList.map((task, i) => {
            return  <TableCell key={task.id} task={{...task, index: i}}/>
          })}
          </tbody>
        </table>}
    </div>
  );
}

export default TaskTable;
