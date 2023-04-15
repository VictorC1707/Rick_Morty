export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const ORDER = "ORDER"
export const FILTER = "FILTER"

export function addFavorite(character) {
    return {
        type: ADD_FAVORITE, payload: character
    }
}

export function removeFavorite(id){
    return {
        type:REMOVE_FAVORITE, payload:id
    }
}

export function filterCards(status){
    return {
        type:FILTER, payload: status
    }
}

export function orderCards(id){
    return{
        type:ORDER, payload:id
    }
}