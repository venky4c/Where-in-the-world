import React from "react";

const CountryCard = (props) => {
  //console.log(props);
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
  //   return console.log("value is ", Object.values[0].name);
  //   //console.log('index is ', index);
  // });
  const baseUrl = "https://restcountries.eu/data/";
  const flagName = flag.slice(baseUrl.length, flag.length);
  return (
    <div className="country-card">
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
          {/* <p>
            <label htmlFor="">Currency: </label>
            {currencies[1]}
          </p> */}
        </section>
        <section>
          <span className="span-arr">
            {/* {currencies.map((value, index) => (
              <button
                className="right attached ui button"
                key={index}
                value={value}
                onClick={(e) => props.onFilterButtonClicked(e.target.value)}
              >
                {value}
              </button>
            ))}

            {languages.map((value, index) => (
              <button
                className="right attached ui button"
                key={index}
                value={value}
                onClick={(e) => props.onFilterButtonClicked(e.target.value)}
              >
                {value}
              </button>
            ))} */}
          </span>
        </section>
        <section className="borders">Borders</section>
        <p>
          {borders.map((i) => {
            return console.log("value of i ", i);
            //<button>{i}</button>
          })}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
