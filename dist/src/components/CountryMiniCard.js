import React from "react";

const CountryMiniCard = (props) => {
  const { flag, name, population, region, capital } = props;
  // currencies.map((value) => {
  //   return console.log("value is ", Object.values[0].name);
  //   //console.log('index is ', index);
  // });
  const baseUrl = "https://restcountries.eu/data/";
  const flagName = flag.slice(baseUrl.length, flag.length);
  return (
    <div className="country-mini-card">
      <div className="country-details">
        <img src={`${baseUrl.concat(flagName)}`} alt="dummy" />
        <h2>{name}</h2>
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
