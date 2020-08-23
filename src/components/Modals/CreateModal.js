import React, {useState} from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {createTaskSC} from "../../redux/actionCreators/actionCreators";

function CreateModal({handleShow}) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [validation, setValidation] = useState('');

  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  function handleCreate() {
    if (!text) {
      setValidation('Заголовок не может быть пустым');
      return;
    }
    dispatch(createTaskSC(text))
    handleShow();
  }

  return (
    <>
      <div className={styles.title}>
        <span>Краткое описание</span>
        <span><FontAwesomeIcon icon={faTimes} className={styles.closeModal} onClick={handleShow}/></span>
      </div>
      <div className={styles.form}>
        <input type="text" value={text} onChange={handleChange}/>
        {validation && <span className={styles.error}>{validation}</span>}
        <Button text="Создать" type='create' onClick={handleCreate}/>
      </div>
    </>
  );
}

export default CreateModal;
