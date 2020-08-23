import React from 'react';
import styles from "./styles.module.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";

function Create({type, text, handleChange, handleClick}) {
  return (
    <>
      <div className={styles.title}>
        <span>Краткое описание</span>
        <span><FontAwesomeIcon icon={faTimes} className={styles.closeModal}/></span>
      </div>
      <div className={styles.form}>
        <input type="text" value={text} onChange={handleChange}/>
        <Button text="Создать" type={type} onClick={handleClick}/>
      </div>
    </>
  );
}

export default Create;
