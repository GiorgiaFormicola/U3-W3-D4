import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  list: [],
};

const favouritesReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...currentState,
        list: [...currentState.list, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...currentState,
        list: currentState.list.filter((companyName) => {
          return companyName !== action.payload;
        }),
      };

    default:
      return currentState;
  }
};

export default favouritesReducer;
