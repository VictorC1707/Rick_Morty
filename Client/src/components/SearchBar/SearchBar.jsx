import styled from "styled-components";
import React, { useState } from "react";
import s from "./SearchBar.css"

const ButtonSearch = styled.button`
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: green;
  font-size: 17px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
  &:hover{
   border: 2px solid white;
    box-shadow: 0 0 15px white;
    margin: 5px;
  }
`
const ButtonRandom = styled.button`
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: green;
  font-size: 17px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
  &:hover{
   border: 2px solid white;
    box-shadow: 0 0 15px white;
    margin: 5px;
  }
`
const DivSearch = styled.div`
   float:right;
   margin-right: 15px;
`
const InputSearch = styled.input`
padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  &:hover{
   background: #ccc;
  }
   
`

export default function SearchBar({onSearch}) {
   const [character,setCharacter] = useState('');
   const handleChange = (event) => {
     setCharacter(event.target.value);
   }
   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
   return (
    <div class="search-container">
    <div >
     <button onClick={()=> onSearch(getRandomInt(826))}>Random</button>
      <input type="text" value={character} onChange={handleChange} placeholder ="Buscar"/>
      <button onClick={()=> onSearch(character)}>Submit</button>
    </div>
  </div>

   );
}
