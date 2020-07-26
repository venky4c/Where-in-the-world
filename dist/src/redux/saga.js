import React from "react";
import { takeLatest, put } from "redux-saga/effects";
import * as actions from "./actions";
import { fetchAllCountries, searchForCountries } from "./services";

function* fetchCountries(action) {
  try {
    const COUNTRIES = yield fetchAllCountries();
    //console.log("FROM sage", COUNTRIES);
    yield put({
      type: actions.FETCHED_ALL_COUNTRIES_WITH_SUCCESS,
      payload: COUNTRIES,
    });
  } catch (error) {}
}

function* searchForCountriesSaga(action) {
  try {
    const COUNTRIES = yield searchForCountries(action.payload);
    //console.log("FROM saga", COUNTRIES);
    yield put({
      type: actions.SEARCHED_COUNTRY_WITH_SUCCESS,
      payload: COUNTRIES,
    });
  } catch (error) {}
}

function* mySaga() {
  yield takeLatest(actions.FETCH_ALL_COUNTRIES, fetchCountries);
  yield takeLatest(actions.SEARCH_COUNTRY, searchForCountriesSaga);
}

export default mySaga;
