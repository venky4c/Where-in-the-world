export const FETCH_ALL_COUNTRIES = "FETCH_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const SEARCHED_COUNTRY_WITH_SUCCESS = "SEARCHED_COUNTRY_WITH_SUCCESS";
export const SEARCHED_REGION_WITH_SUCCESS = "SEARCHED_REGION_WITH_SUCCESS";
export const SEARCH_REGION = "SEARCH_REGION";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const FETCHED_ALL_COUNTRIES_WITH_SUCCESS =
  "FETCHED_ALL_COUNTRIES_WITH_SUCCESS";
export const FETCH_ALL_COUNTRIES_FAILURE = "FETCH_ALL_COUNTRIES_FAILURE";

export function fetchAllCountries() {
  return {
    type: FETCH_ALL_COUNTRIES,
  };
}

export function searchCountry(countryName) {
  return {
    type: SEARCH_COUNTRY,
    payload: countryName,
  };
}

export function searchRegion(regionName) {
  return {
    type: SEARCH_REGION,
    payload: regionName,
  };
}

export function getCountryDetails(countryName) {
  return {
    type: GET_COUNTRY_DETAILS,
    payload: countryName,
  };
}
