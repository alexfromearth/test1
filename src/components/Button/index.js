import React from 'react';
import styles from './styles.module.sass';

function stylePick(type) {
  switch (type) {
    case "edit": {
      return styles.edit
    }
    case "delete": {
      return styles.delete
    }
    case "create": {
      return styles.edit
    }
    case "back": {
      return styles.back
    }
    default:
      return styles.edit
  }
}

function Button({text, type, onClick}) {
  return <button className={stylePick(type)} onClick={onClick}>{text}</button>;
}

export default Button;
