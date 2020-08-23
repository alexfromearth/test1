import React from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";

function Delete({type, text, handleChange, handleClick}) {
  return (
    <>
      <div className={styles.title}>
        <span>Вы действительно хотите удалить задачу?</span>
        <span><FontAwesomeIcon icon={faTimes} className={styles.closeModal}/></span>
      </div>
      <div className={styles.deleteBtns}>
        <Button text="Удалить" type={type} onClick={handleClick}/>
        <Button text="Отмена"/>
      </div>
    </>
  );
}

export default Delete;
