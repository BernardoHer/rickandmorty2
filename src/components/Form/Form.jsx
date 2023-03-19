import React from "react";
import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <form className={styles.container}>
        <img className={styles.img} src="https://wallpapercave.com/dwp1x/wp4791005.png" alt="not found"/>
      <label htmlFor="name" className={styles.label}>
        Nombre:
      </label>
      <input type="text" id="name" className={styles.input} />
      <label htmlFor="password" className={styles.label}>
        Password:
      </label>
      <input type="password" id="password" className={styles.input} />
      <button className={styles.button}>Login</button>
    </form>
  );
}
