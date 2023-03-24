import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter(
        (character) => character.id != payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];

      const filterGender = filterCopy.filter(
        (charac) => charac.gender === payload
      );

      return {
        ...state,
        myFavorites: filterGender,
      };

    case ORDER:
      const orderCopy = [...state.allCharacters];

      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendente" ? 1 : -1;
        }
        if (a.id < b.id) {
         return  payload === "Ascendente" ? -1 : 1;
        }
        
        else return 0
        
      });
      return {
        ...state,
        myFavorites: order
      }
      

    default:
      return { ...state };
  }
};

export default reducer;
