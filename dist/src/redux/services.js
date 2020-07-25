import React from "react";
const baseUrl = "https://restcountries.eu/rest/v2/";

export const fetchAllCountries = async () => {
  const response = await fetch(baseUrl + "all");
  return response.json();
};

//restcountries.eu/rest/v2/name/{name}

export const searchForCountries = async (name) => {
  const response = await fetch(baseUrl + `name/${name}`);
  return response.json();
};
