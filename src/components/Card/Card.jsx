import React from "react";
import styles from "./Card.module.css";
import CloseButton from "../CloseButtonCard/CloseButton.jsx";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <CloseButton onClick={props.onClose} />
      <div className={styles.cardImage}>
        <img src={props.image} alt="Rick-imagen" />
      </div>
      <h2>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
    </div>
  );
}
