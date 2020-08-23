import React, {useState} from 'react';
import styles from './styles.module.sass';
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";

function pickModal(type, text, handleChange, handleClick) {
  switch (type) {
    case "delete": {
      return <Delete type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}/>
    }
    case "edit": {
      return <Edit type={type}
                   text={text}
                   handleChange={handleChange}
                   handleClick={handleClick}/>
    }
    case "create": {
      return <Create type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}/>
    }
    default:
      return <Create type={type}
                     text={text}
                     handleChange={handleChange}
                     handleClick={handleClick}/>
  }
}

function Modal({type}) {

  const [text, setText] = useState('');

  function handleChange(e) {
    const {value} = e.target;
    setText(value);
  }

  function handleClick(operationType, taskId) {
    switch (operationType) {
      case operationType === 'delete':

      case operationType === 'create':

      case operationType === 'edit':

    }
  }

  return (
    <div className={styles.modalWrapper}>
      {pickModal(type, text, handleChange, handleClick)}
    </div>
  );
}

export default Modal;
