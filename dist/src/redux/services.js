import React from "react";
const baseUrl = "https://restcountries.eu/rest/v2/";
//restcountries.eu/rest/v2/name/{name}

export const fetchAllCountries = async () => {
  const response = await fetch(baseUrl + "all");
  return response.json();
};

export const searchForCountries = async (name) => {
  console.log("From services.js ", name);
  const response = await fetch(baseUrl + `name/${name}`);
  return response.json();
};

export const searchForCountriesByRegion = async (region) => {
  const response = await fetch(baseUrl + `region/${region}`);
  return response.json();
};

export const getCountryNameByCode = async (code) => {
  const response = await fetch(baseUrl + `alpha/${code}`);
  const country = await response.json();
  return country.name;
  //return console.log(response.json());;
};
