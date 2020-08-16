
const baseUrl = "https://restcountries.eu/rest/v2/";


export const fetchAllCountries = async () => {
  const response = await fetch(baseUrl + "all");
  return response.json();
};

export const searchForCountries = async (name) => {
  //console.log("From services.js ", name);
  try {
    const response = await fetch(baseUrl + `name/${name}`);
  const countries = await response.json();
  return countries;
  } catch (error) {
    console.error('error service issssssssssss',error);
    return error;
  }  
};

export const searchForCountriesByRegion = async (region) => {
  const response = await fetch(baseUrl + `region/${region}`);
  return response.json();
};

export const getCountryNameByCode = async (code) => {
  const response = await fetch(baseUrl + `alpha/${code}`);
  const country = await response.json();  
  return country.name;
};
