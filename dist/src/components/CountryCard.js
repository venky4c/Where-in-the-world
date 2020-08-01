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
  const [countryBorder, setCountryBorder] = useState([]);

  // useEffect(() => {
  //   const fetchCountryNames = async () => {
  //     const countryNames = await borders.map(async (value) => {
  //       const name = await services.getCountryNameByCode(value);
  //       console.log("names of borders are", name);
  //       setCountryBorder({ countryNames: [...countryNames, name] });
  //     });
  //   };
  //   fetchCountryNames();
  // }, [borders]);
  //  console.log("Border names are", countryBorder);
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
          {borders.map((value) => (
            <span>{services.getCountryNameByCode(value)}&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
