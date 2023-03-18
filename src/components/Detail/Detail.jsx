import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const navigate = useNavigate()
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
     <button onClick={()=>navigate(-1)} >Regresar</button>
      <div>
       <h1>Name: {character.name} </h1>
       <h1>Status: {character.status} </h1>
       <h1>Gender: {character.gender} </h1>
       <h1>Origin: {character.origin?.name} </h1> 
       </div>
       <img src={character.image}/>
       </div>
  )}
