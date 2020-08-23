import React from 'react';
import styles from './styles.module.sass';
import Button from "../Button";
import Task from "./Task";

function TaskTable(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Список задач</h3>
        <Button type="create" text="Добавить"/>
      </div>
      <table className={styles.table}>
        <tbody>
          <Task />
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
