import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER} from "./actions"

const initialState = {
    myFavorites:[],
    allCharacters: []
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAVORITE:
            return{
              ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAVORITE:
            return{
              ...state,
                myFavorites: state.myFavorites.filter(favorite => favorite.id!== action.payload)
            }
        
        case FILTER:
            let copyAllCharactersFilter = [...state.allCharacters]
            return {
                ...state,
                myFavorites: copyAllCharactersFilter.filter(character => character.gender === action.payload)
            }
        case ORDER:
            let copyAllCharactersOrder = [...state.allCharacters]
            if (action.payload === 'Ascendente') {
				return {
					...state,
					myFavorites: copyAllCharactersOrder.sort(
						(characterA, characterB) => characterA.id - characterB.id,
					),
				};
			} else if (action.payload === 'Descendente') {
				return {
					...state,
					myFavorites: copyAllCharactersOrder.sort(
						(characterA, characterB) => characterB.id - characterA.id,
					),
				};
			} else {
				break;
			}
            
        default:
            return { ...state}
    }
}

export default reducer 