import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import Button from "../../../Button";
import styles from './styles.module.sass';

function TaskPage() {
  const {id} = useParams();
  const history = useHistory()
  const taskList = useSelector(state => state.main.taskList);

  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskList) {
      let i;
      const currentTask = taskList.find((task, index) => {
        if (task.id === +id) {
          i = index;
          return task;
        } else {
          return undefined;
        }
      });
      setTask({...currentTask, index: i});
    }
  }, [taskList, id])


  return (
    <>
      {task && <div>
        <h2>Задача №{task.index + 1}</h2>
        <p>Краткое описание</p>
        <input className={styles.input} type="text" value={task.title} disabled/>
        <br/>
        <br/>
        <Button text="Вернуться в список" type="back" onClick={() => {history.goBack()}}/>
      </div>
      }
    </>
  );
}

export default TaskPage;
