import React from "react";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import { Link, Switch, Route } from "react-router-dom";
import CountryCard from "./CountryCard";

const CountryMiniCard = (props) => {
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

  const baseUrl = "https://restcountries.eu/data/";
  const flagName = flag.slice(baseUrl.length, flag.length);
  return (
    <div className={`${theme}-theme`} id="country-mini-card">
      <div className="country-details">
        <img src={`${baseUrl.concat(flagName)}`} alt="dummy" />
        <Link to="/countrycard">
          <h2>{name}</h2>
        </Link>
        {/* HERE WE NEED TO SHOW ONLY INDIVIDUAL COUNTRY, not the full list */}
        <Switch>
          <Route path="/countrycard">
            <CountryCard />
          </Route>
        </Switch>
        <p>
          <label htmlFor="">Population: </label>
          {population}
        </p>
        <p>
          <label htmlFor="">Region: </label>
          {region}
        </p>

        <p>
          <label>Capital: </label>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryMiniCard;
