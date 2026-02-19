export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_SEARCH_DATA = "GET_SEARCH_DATA";
export const GET_COMPANY_DATA = "GET_COMPANY_DATA";

export const addToFavouritesAction = (company) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: company,
  };
};

export const removeFromFavouritesAction = (company) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: company,
  };
};

export const getSearchDataAction = (data) => {
  return {
    type: GET_SEARCH_DATA,
    payload: data,
  };
};

export const getCompanyDataAction = (data) => {
  return {
    type: GET_COMPANY_DATA,
    payload: data,
  };
};

export const handleFavouritesAction = (company) => {
  return (dispatch, getState) => {
    const currentState = getState();
    if (!currentState.favourites.list.includes(company)) {
      dispatch(addToFavouritesAction(company));
    } else {
      dispatch(removeFromFavouritesAction(company));
    }
  };
};

export const getSearchResultsAction = (baseEndpoint, query) => {
  return async (dispatch) => {
    fetch(baseEndpoint + query + "&limit=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Error fetching results");
          throw new Error("Error fetching results");
        }
      })
      .then((data) => {
        dispatch(getSearchDataAction(data));
      })
      .catch((error) => console.log(error));
  };
};

export const getCompanyResultsAction = (baseEndpoint, params) => {
  return async (dispatch) => {
    fetch(baseEndpoint + params.company)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Error fetching results");
          throw new Error("Error fetching results");
        }
      })
      .then((data) => {
        dispatch(getCompanyDataAction(data));
      })
      .catch((error) => console.log(error));
  };
};
