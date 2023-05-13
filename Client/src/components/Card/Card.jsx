import styled from "styled-components";
import { Link, useLocation} from "react-router-dom";
import { connect } from "react-redux";
import s from "./Card.css"
import {addFavorite, removeFavorite} from "../../redux/actions.js"
import React, { useEffect, useState } from "react";



function Card(props) {
  const location = useLocation();
  const[isFav,setIsFav] = useState(false)

  let statusc = ""
  if(props.status == "Alive"){
    statusc = "Alive"
  }else {
    statusc = "Dead"
  }
  function handleFavorite(){
    if(isFav){
      setIsFav(false)
      props.removeFavorite(props.id)
    }else {
      setIsFav(true)
      props.addFavorite(props)
    }
  }
  let handleClose
  if(location.pathname == "/Favorites"){
    handleClose = (event) => {
      props.removeFavorite(props.id);
    };
  } else {
    handleClose = props.onClose
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if(fav.id == props.id){
        setIsFav(true)
      }
    })

  }, [props.myFavorites])

   return (
  <div className="card">
    <button className="closeButton" onClick={handleClose}>X</button>

    {isFav ? (
      <button className="dislike-button" type="button" onClick={handleFavorite}>
      <span class="transition2"></span>
      <span class="gradient"></span>
      <span class="label">❤️</span>
      </button>
      ):(
      <button className="like-button" type="button" onClick={handleFavorite}>
      <span class="transition"></span>
      <span class="gradient"></span>
      <span class="label">🤍</span>
      
      </button>
      )}
    
    <div className="infos">
        <div className="image" ><img className="image" src={props.image} alt=""/></div>
        <div className="info">
            <div>
                <p className="name">
                {props.name}
                </p>
                <p className="function">
                  {props.gender}
                </p>
            </div>
            <div className="stats">
                    <p className="flex flex-col">
                        Status
                        <span className={"state-value " + statusc}>
                          {props.status}
                        </span>
                    </p>
                    <p className="flex">
                        Species
                        <span className="state-value">
                        {props.species}
                        </span>
                    </p>
                    
            </div>
        </div>
    </div>
    <Link to={`/detail/${props.id}`}>
    <button className="request" type="button">
            Details
        </button>
        </Link>
</div>
   );
}
let mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites }
}
let mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) =>
			dispatch(addFavorite(character)),
		removeFavorite: (id) => dispatch(removeFavorite(id))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Card)