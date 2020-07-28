import * as actions from "./actions";
import { combineReducers } from "redux";

const initialState = { countriesList: [], loading: false, error: "" };

const countries = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ALL_COUNTRIES:
      return { ...state, loading: true };
    case actions.FETCHED_ALL_COUNTRIES_WITH_SUCCESS:
      //console.log("payload is", action.payload);
      return { ...state, countriesList: action.payload, loading: false };
    case actions.SEARCH_COUNTRY:
      //console.log("payload is", action.payload);
      return { ...state, loading: true };
    case actions.SEARCHED_COUNTRY_WITH_SUCCESS:
      console.log("payload from reducer is", action.payload);
      return { ...state, countriesList: action.payload, loading: false };

    default:
      return state;
  }
};

export default combineReducers({ countries });
