import React, { useState } from "react";

function Content() {
  const urlAll = "https://restcountries.eu/rest/v2/all";
  const urlRegion = "https://restcountries.eu/rest/v2/region/{region}";
  const [countries, setCountries] = useState([]);
  const getCountries = async (event) => {
    let response = await fetch(urlAll);
    let countryArr = await response.json();
    //setCountries(countryArr);
    //console.log(`data is ${data}`);
    let countryDetails = countryArr.filter(
      (country) => country.region === "europe"
    );
    const borders = JSON.stringify(countryDetails, null, 4);

    console.log(`borders is ${borders}`);
  };
  return (
    <div className="content">
      <input
        type="text"
        className="search"
        placeholder="Search for a country"
        //onChange={(event) => getData(event)}
      />
      <button onClick={getCountries}>Fetch</button>
      <select name="continents" id="">
        <option value="Filter by Region" selected>
          Filter by Region
        </option>
        <option value="africana">Africana</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Content;

// const Content = () => (
//     <div className="content">
//       <input type="text" className="search" placeholder="Search for a country" />
//       <select name="continents" id="">
//         <option value="Filter by Region" selected>
//           Filter by Region
//         </option>
//         <option value="africana">Africana</option>
//         <option value="america">America</option>
//         <option value="asia">Asia</option>
//         <option value="europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>
//     </div>
//   );
