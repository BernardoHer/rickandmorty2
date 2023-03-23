import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setCharacter(value);
  };
  return (
    <div className={styles.container}>
      <input className={styles.searchInput} type="search" onChange={handleInputChange} />
      <button className={styles.searchButton} onClick={() => props.onSearch(character)}>Add Card</button>
    </div>
  );
}
