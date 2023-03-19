import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const navigate = useNavigate()
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const[access,setAcces] = useState(false)
  const userName='bernaher19@gmail.com'
  const password ='berna123'
  

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
  
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };
  
  const login = (userData) =>{
    userData.username === userName && userData.password === password && setAcces(true) && navigate('/home')
    
  }
  useEffect(()=>{
    !access && navigate('/')
    
  },[access])
  return (
    <div style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
