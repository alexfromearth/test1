import React, {useState} from 'react';
import styles from './styles.module.sass';
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";
import {useDispatch} from "react-redux";
import {createTaskSC} from "../../../redux/actionCreators/actionCreators";

function pickModal(type, text, handleChange, handleClick, handleShow) {
  switch (type) {
    case "delete": {
      return <Delete type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}
                     handleShow={handleShow}/>
    }
    case "edit": {
      return <Edit type={type}
                   text={text}
                   handleChange={handleChange}
                   handleClick={handleClick}
                   handleShow={handleShow}/>
    }
    case "create": {
      return <Create type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}
                     handleShow={handleShow}/>
    }
    default:
      return <Create type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}
                     handleShow={handleShow}/>
  }
}

function Modal({type, handleShow}) {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  function handleClick(operationType, taskId) {
    debugger;
    if (!text) return;
    switch (operationType) {
      case "delete":
        handleShow();
        break;
      case "create":
        dispatch(createTaskSC(text));
        handleShow();
        break;
      case "edit":
        handleShow();
        break;
      default:
        handleShow();
    }
  }

  return (
    <div className={styles.modalWrapper}>
      {pickModal(type, text, handleChange, handleClick, handleShow)}
    </div>
  );
}

export default Modal;
