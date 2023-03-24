import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from './actionTypes';

export const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}
export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}
export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}