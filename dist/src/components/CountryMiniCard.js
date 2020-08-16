import React from "react";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const CountryMiniCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const {    
    flag,
    name,    
    population,
    region,    
    capital    
  } = props;

  return (
    <div className={`${theme}-theme`} id="country-mini-card">
      <div className="country-details">
        <img src={`${flag}`} alt="dummy" />
        <Link to={`/country/${name}`}>
          <h4 style={{color: theme === 'light' ? 'dimgray' : 'papayawhip'}}>{name}</h4>
        </Link>
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
