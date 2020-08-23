import React from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";

function Edit({type, text, handleChange, handleClick, handleShow}) {
  return (
    <>
      <div className={styles.title}>
        <span>Краткое описание</span>
        <span onClick={handleShow}><FontAwesomeIcon icon={faTimes} className={styles.closeModal}/></span>
      </div>
      <div className={styles.form}>
        <input type="text" value={text} onChange={handleChange}/>
        <Button text="Изменить" type={type} onClick={handleClick}/>
      </div>
    </>
  );
}

export default Edit;
