import React, { useState, useContext } from "react";
import * as services from "../redux/services";
import { ThemeContext } from "../themeContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CountryCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props;
  const [countryBorder, setCountryBorder] = useState([]);//state variable to keep track of the borders(neighbouring countries) of selected country

  //The borders prop contains a list of bordering countries. But the values of borders array is not 
  // the country names. Instead it is a 3 letter code representing the country name Ex: 'IND' for India.  
  //we have a method defined inside the services.js that takes the name of the countryCode and returns
  // the corresponding country name.
  const fetchCountryNames = async () => {
    const countryNames = await borders.map(async (value) => {
      const name = await services.getCountryNameByCode(value); //this asynchronous call gets us the name of the country given the code
      //console.log("names of borders are", name); // we want to put these names of countryBorders in any array with same name
      //setCountryBorder({ countryNames: [...countryNames, name] }); //
      setCountryBorder(countryNames =>[...countryNames, name])

    });
  };
  useEffect(() => {
    fetchCountryNames();
  }, [borders]);// we want to get the countrynames of borders whenever the borders prop changes
    
  return (
    <div className={`${theme}-theme`} id="country-card">
      <div className="flag">
        <Link to="/">Back</Link>
        <img src={`${flag}`} alt="" />
      </div>
      <div className="other-details">
        <div className="part1">
          <h2>{name}</h2>
        </div>
        <div className="part2">
          <section className="main">
            <p>
              <label htmlFor="">Native Name: </label>:{nativeName}
            </p>
            <p>
              <label htmlFor="">Population: </label>
              {population}
            </p>
            <p>
              <label htmlFor="">Region: </label>
              {region}
            </p>

            <p>
              <label htmlFor="">Sub Region: </label>
              {subregion}
            </p>

            <p>
              <label>Capital: </label>
              {capital}
            </p>
          </section>
          <section className="sub">
            <p>
              <label htmlFor="">Top Level Domain: </label>
              {topLevelDomain}
            </p>
            <p className="span-arr">
              <label className="currencies">Currencies: </label>
              {currencies.map((value, index) => value.name + " ")}{" "}
            </p>
            <p>
              <label className="languages">Languages: </label>
              {languages.map((value, index) => value.name + " ")}
            </p>
          </section>
        </div>

        <div className="part3">
          <label>Borders: </label>
          {countryBorder.map((value) => (
            <span>{value}&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
