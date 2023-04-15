import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./h1.css"


export default function Detail() {
  window.onload = function () {
    document.querySelector('.cont_modal').classNameName = "cont_modal";
  }
  
  let c = 0;
  function open_close() {
    document.querySelector('.cont_modal').classNameName =
      c % 2 == 0 ? "cont_modal cont_modal_active" : "cont_modal";
    c++;
  }
  

    const {detailId} = useParams();
    const [character,setCharacter] = useState({})
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

      let statusc = ""
  if(character.status == "Alive"){
    statusc = "Alive"
  }else {
    statusc = "Dead"
  }
    return(<>
    <div className="wrapper">
	<div className="main_card">
		<div className="card_left">
			<div className="card_datails">
				<h1>{character.id} - {character.name}</h1>
        <p className="gendert">{character.gender}</p>
        <div className="card_cat">
					<h3 className="PG">Status:</h3>
					<p className={"year " + statusc}>{character.status}</p>
					<h3 className="PG">Specie:</h3>
					<p className="time">{character.species}</p>
				</div>
				<div className="card_cat">
					<h3 className="PG">Origin:</h3>
					<p className="year">{character.origin?.name}</p>
					<h3 className="PG">Location:</h3>
					<p className="time">{character.location?.name}</p>
				</div>
			</div>
		</div>
		<div className="card_right">
			<div className="img_container">
				<img src={character.image} alt=""/>
				</div>
			</div>
		</div>
	</div>

    </>
    )

}