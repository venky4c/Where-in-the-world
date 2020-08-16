import { takeLatest, put } from "redux-saga/effects";
import * as actions from "./actions";
import {
  fetchAllCountries,
  searchForCountries,
  searchForCountriesByRegion,
  getCountryNameByCode,
} from "./services";

function* fetchCountries(action) {
  try {
    const COUNTRIES = yield fetchAllCountries();
    //console.log("FROM saga", COUNTRIES);
    yield put({
      type: actions.FETCHED_ALL_COUNTRIES_WITH_SUCCESS,
      payload: COUNTRIES,
    });
  } catch (error) {}
}

function* searchForCountriesSaga(action) {
  try {
    const COUNTRIES = yield searchForCountries(action.payload);
    console.log("Country FROM saga", COUNTRIES);
    yield put({
      type: actions.SEARCHED_COUNTRY_WITH_SUCCESS,
      payload: COUNTRIES,
    });
  } catch (error) {
    console.log('error from sagaaaaaaaaa', error)
  }
}

function* searchForCountriesByRegionSaga(action) {
  try {
    const COUNTRIES = yield searchForCountriesByRegion(action.payload);
    console.log("countries from sagaRegion ", COUNTRIES);
    yield put({
      type: actions.SEARCHED_REGION_WITH_SUCCESS,
      payload: COUNTRIES,
    });
  } catch (error) {}
}

function* getCountryNameByCodeSaga(action) {
  try {
    const COUNTRY = yield getCountryNameByCode(action.payload);
    console.log("country names from saga", COUNTRY);
    yield put({
      type: actions.GOT_COUNTRY_NAME_BY_CODE_WITH_SUCCESS,
      payload: COUNTRY,
    });
  } catch (error) {}
}

function* mySaga() {
  yield takeLatest(actions.FETCH_ALL_COUNTRIES, fetchCountries);
  yield takeLatest(actions.SEARCH_COUNTRY, searchForCountriesSaga);
  yield takeLatest(actions.SEARCH_REGION, searchForCountriesByRegionSaga);
  yield takeLatest(actions.GET_COUNTRY_NAME_BY_CODE, getCountryNameByCodeSaga);
}

export default mySaga;
