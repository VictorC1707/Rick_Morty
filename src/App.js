import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import React, { useState, useEffect } from "react"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About'
import Detail from './components/Details'
import Form from './components/Form'
import Error from "./components/404"
import Favorites from "./components/Favorites/Favorites"
function App () {

  const location = useLocation();
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  let username = "victor.canchis7@gmail.com"
  let password = "Vc27935276"

  function login(userData){
    if(userData.password === password && userData.username === username){
      setAccess(true);
      navigate("/Home")
    } else{
      window.alert("Ingrese datos validos")
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access])


  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    const present = characters.find(char => char.id==character)
    if (present) {
      window.alert('Personaje Repetido');
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
    }
 }

  function onClose(id) {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <>
    {location.pathname !=='/'  && <Nav onSearch = {onSearch}/>}
    <div className='App' style={{ padding: '25px' }}>
    <hr />
    <Routes>
    <Route path="/" element={<Form login={login}/>} />
    <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
    <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose} />} />
    <Route path="/about" element={<About />} />
    <Route path='/detail/:detailId' element={<Detail />} />
    <Route path ="*" element={<Error />} />
    </Routes>
    </div>
    </>
  )
}

export default App
