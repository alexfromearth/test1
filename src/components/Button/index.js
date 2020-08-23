import React from 'react';
import styles from './styles.module.sass';

function Button({text, type}) {

  function stylePick() {
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
    }
  }

  return (
    <button className={stylePick()}>{text}</button>
  );
}

export default Button;
