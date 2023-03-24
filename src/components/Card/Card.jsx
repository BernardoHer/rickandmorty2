import React, { useState } from "react";
import styles from "./Card.module.css";
import CloseButton from "../CloseButtonCard/CloseButton.jsx";
import { Link } from 'react-router-dom'
import { ADD_FAVORITE, DELETE_FAVORITE } from "../reducer/actionTypes";
import { addFavorite, deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      deleteFavorite(props.id)
    } else {
      setIsFav(true)
      addFavorite({ props })
    }
  }

  return (
    <Link to={`/detail/${props.id}`}>
      <div className={styles.card}>
        {
          isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
        }
        <CloseButton onClick={props.onClose} />
        <div className={styles.cardImage}>
          <img src={props.image} alt="Rick-imagen" />
        </div>
        <h2>{props.name}</h2>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </Link>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id))

    }
  }
}
export default connect(null, mapDispatchToProps)(Card)
