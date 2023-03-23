import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";
import Error from "./components/Error/Error.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAcces] = useState(false);
  const userName = "bernaher19@gmail.com";
  const password = "berna123";

  function onSearch(character) {
    const characterId = Number(character);
    if (characters.find((char) => char.id === characterId)) {
      window.alert("Este personaje ya se encuentra en la lista.");
      return;
    }
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  const login = (userData) => {
    if (userData.username === userName && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
