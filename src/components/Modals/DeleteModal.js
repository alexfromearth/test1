import React from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {deleteTaskSC} from "../../redux/actionCreators/actionCreators";

function DeleteModal({handleShow, task}) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTaskSC(task.id))
    handleShow(false);
  }

  return (
    <div className={styles.deleteModalWrapper}>
      <div className={styles.title}>
        <span>Вы действительно хотите удалить задачу?</span>
        <span><FontAwesomeIcon icon={faTimes} className={styles.closeModal} onClick={() => handleShow(false)}/></span>
      </div>
      <div className={styles.deleteBtns}>
        <Button text="Удалить" type='delete' onClick={handleDelete}/>
        <Button text="Отмена" type='back' onClick={() => handleShow(false)}/>
      </div>
    </div>
  );
}

export default DeleteModal;
