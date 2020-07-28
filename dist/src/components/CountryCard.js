import React, { useContext } from "react";
import * as services from "../redux/services";
import { ThemeContext } from "../themeContext";

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
  // currencies.map((value) => {
  //   return console.log("currency value is ", value.name);
  //   //console.log('index is ', index);
  // });
  const baseUrl = "https://restcountries.eu/data/";
  const flagName = flag.slice(baseUrl.length, flag.length);

  return (
    <div className={`${theme}-theme`} id="country-card">
      <img src={`${baseUrl.concat(flagName)}`} alt="dummy" />
      <h2>{name}</h2>
      <div className="country-details">
        <section className="part1">
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
        <section className="part2">
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
          {/* <p>
            <label>Borders: </label>
            {borders.map((value) => (
              <p>{services.getCountryNameByCode(value)}</p>
            ))}
          </p> */}
        </section>
      </div>
    </div>
  );
};

export default CountryCard;
