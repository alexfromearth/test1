import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.sass'

function Task({task}) {
  return (
    <tr>
      <td className={styles.backCols}>Задача №{task.index + 1}</td>
      <td>{task.title}</td>
      <td className={styles.backCols}>
        <a><FontAwesomeIcon icon={faPenSquare}/></a>
        <a><FontAwesomeIcon icon={faTrash}/></a>
      </td>
    </tr>
  );
}

export default Task;
