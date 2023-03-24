import { ADD_FAVORITE, DELETE_FAVORITE, FILTER,ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: []

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters:[...state.allCharacters,payload],
        myFavorites: [...state.myFavorites, payload]
      };
      case DELETE_FAVORITE:
        const filtered = state.myFavorites.filter((character) => character.id != payload)
        return{
          ...state,
          myFavorites:filtered
        }

    default:
      return { ...state };
  }
};

export default reducer;
