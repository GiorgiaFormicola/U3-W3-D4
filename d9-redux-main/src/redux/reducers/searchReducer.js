import { GET_SEARCH_DATA, GET_COMPANY_DATA } from "../actions";

const initialState = {
  jobsBySearch: null,
  jobsByCompany: null,
};

const searchReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return {
        ...currentState,
        jobsBySearch: action.payload,
      };
    case GET_COMPANY_DATA:
      return {
        ...currentState,
        jobsByCompany: action.payload,
      };
    default:
      return currentState;
  }
};

export default searchReducer;
