import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) =>{
    const filtered = characters.filter((char)=> char.id !== Number(id)) 
    setCharacters(filtered)
  }
  return (
    <div style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Cards characters={characters} onClose={onClose}/>
      <hr />
    </div>
  );
}

export default App;
