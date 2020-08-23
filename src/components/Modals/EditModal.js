import React, {useState} from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {editTaskSC} from "../../redux/actionCreators/actionCreators";

function EditModal({task, handleShow}) {
  const dispatch = useDispatch();

  const [text, setText] = useState(task.title);

  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  function handleEdit() {
    dispatch(editTaskSC(task.id, text));
    handleShow(false);
  }

  return (
    <>
      <div className={styles.title}>
        <span>Краткое описание</span>
        <span><FontAwesomeIcon icon={faTimes} className={styles.closeModal} onClick={() => {handleShow(false)}}/></span>
      </div>
      <div className={styles.form}>
        <input type="text" value={text} onChange={handleChange}/>
        <Button text="Изменить" type='edit' onClick={handleEdit}/>
      </div>
    </>
  );
}

export default EditModal;
