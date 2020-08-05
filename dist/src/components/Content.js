import React, { useState } from "react";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
import CountryMiniCard from "./CountryMiniCard";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Content() {
  const { theme } = useContext(ThemeContext);
  const urlAll = "https://restcountries.eu/rest/v2/all";
  const urlRegion = "https://restcountries.eu/rest/v2/region/{region}";
  const [userInput, setUserInput] = useState("");
  const [regionInput, setRegionInput] = useState('');

  const handleOnChange = (event) => {
    const searchBy = event.target.value;
    setUserInput(searchBy);
  };
  const dispatch = useDispatch();
   function handleOnSelect(event) {
     console.log("Region is ", event.target.value);
     const searchBy = event.target.value;
     setRegionInput(searchBy)
     dispatch(actions.searchRegion(searchBy));
  }

  return (
    <div className={`${theme}-theme`} id="content">
      <input
        type="text"
        className="search"
        value={userInput}
        placeholder="Search for a country"
        onChange={(event) => handleOnChange(event)}
      />
      <button onClick={() => dispatch(actions.searchCountry(userInput))}>
        Fetch
      </button>
      <select name="continents" id=""
        value={regionInput} onChange={e =>handleOnSelect(e)}>
        <option value="Filter by Region" selected>
          Filter by Region
        </option>
        <option value="Africa">Africana</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/* <CountryMiniCard {...country} /> */}
    </div>
  );
}

export default Content;
