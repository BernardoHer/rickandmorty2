import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return(
   <div className={styles.container}>
       <h1>Name: {character.name} </h1>
       <h1>Status: {character.status} </h1>
       <h1>Gender: {character.gender} </h1>
       <h1>Origin: {character.origin?.name} </h1> 
       <h1>Image: {character.image} </h1>
       
       </div>
  )}
