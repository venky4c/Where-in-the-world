import React, { useState } from "react";
import * as actions from "../redux/actions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Content() {
  const { theme } = useContext(ThemeContext);
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
  
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(actions.searchCountry(userInput))
  }

  return (
    <div className={`${theme}-theme`} id="content">
      
      <form onSubmit={onFormSubmit}>
      <i class="fas fa-search"></i>      
      <input
        type="text"
        className="search"
        value={userInput}
        placeholder="Search for a country..."
        onChange={(event) => handleOnChange(event)}
      />
      
      </form>
      <select name="continents" id=""
        value={regionInput} onChange={e =>handleOnSelect(e)}>
        <option value="all" >
          Filter by Region
        </option>
        <option value="Africa">Africana</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Content;
