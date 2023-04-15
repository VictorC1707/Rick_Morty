import SearchBar from "../SearchBar/SearchBar"
import styled from "styled-components";
import { useLocation, NavLink } from "react-router-dom";
import "./Nav.css"

const DivNav = styled.div`
    overflow: hidden;
    background-color:  #3424cc;
    height: 50px
`
export default function Nav({onSearch}){
    const location = useLocation();
    return (
    <div class="topnav">
        <NavLink className={({isActive})=> isActive ? `active` : `noactive`} to="/Home">Home</NavLink>
        <NavLink className={({isActive})=> isActive ? `active` : `noactive`} to="/Favorites">Favorites</NavLink>
        <NavLink className={({isActive})=> isActive ? `active` : `noactive`} to="/About">About</NavLink>
        {location.pathname =='/Home'  && <SearchBar onSearch={onSearch}/>} 
    </div>
    )
}