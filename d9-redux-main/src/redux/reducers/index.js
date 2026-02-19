const initialState = {
  favourites: {
    list: [],
  },
};

const mainReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...currentState,
        favourites: {
          ...currentState.favourites,
          list: [...currentState.favourites.list, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...currentState,
        favourites: {
          ...currentState.favourites,
          list: currentState.favourites.list.filter((companyName) => {
            return companyName !== action.payload;
          }),
        },
      };

    default:
      return currentState;
  }
};

export default mainReducer;
