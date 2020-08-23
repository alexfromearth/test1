import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.sass'
import {NavLink} from "react-router-dom";
import Button from "../../Button";
import ModalPortal from "../../Modals/ModalPortal/ModalPortal";
import modalStyles from "../../Modals/ModalPortal/styles.module.sass";
import EditModal from "../../Modals/EditModal";
import DeleteModal from "../../Modals/DeleteModal";

function TableCell({task}) {

  const [showModal, setShowModal] = useState(false);

  function handleShow(value) {
    setShowModal(value);
  }

  return (
    <tr>
      <td className={styles.backCols}>
        <NavLink to={`/tasks/${task.id}`}>
        Задача №{task.index + 1}
        </NavLink>
      </td>
      <td>{task.title}</td>
      <td className={styles.backCols}>
        <Button text={<FontAwesomeIcon icon={faPenSquare} />} onClick={() => handleShow('edit')}/>
        {showModal === 'edit' &&  <ModalPortal className={modalStyles.myModal}>
          <EditModal handleShow={handleShow} task={task}/>
        </ModalPortal>}
        <Button text={<FontAwesomeIcon icon={faTrash}/>} onClick={() => handleShow('delete')}/>
        {showModal === 'delete' &&  <ModalPortal className={modalStyles.myModal}>
          <DeleteModal handleShow={handleShow} task={task}/>
        </ModalPortal>}
      </td>
    </tr>
  );
}

export default TableCell;
