import React from "react";
import styles from "./CloseButton.module.css";

export default function CloseButton(props) {
  return (
    <button className={styles.closeBtn} onClick={props.onClick}>
      <span aria-hidden="true">&times;</span>
    </button>
  );
}