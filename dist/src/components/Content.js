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

  const handleOnChange = (event) => {
    const searchBy = event.target.value;
    setUserInput(searchBy);
  };
  const dispatch = useDispatch();
  // function handleClick() {
  //   console.log("country is ", userInput);
  //   dispatch(actions.searchCountry("India"));
  // }
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
      {/* <CountryMiniCard {...country} /> */}
    </div>
  );
}

export default Content;
