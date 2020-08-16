import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import CountryMiniCard from "./components/CountryMiniCard";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from './themeContext';
import { useEffect, useContext } from "react";
import * as actions from "./redux/actions";

function App(props) {
  const { theme } = useContext(ThemeContext);
  const countries = useSelector((state) => state.countries);
  const { countriesList } = countries;
  console.log("countries are", countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAllCountries());
  }, []);
  console.log('xxxxvvvvvvvv ', (Object.values(countriesList)[0] ===404) )
  return (
    <div className={`${theme}-theme`}>
      <div className="wrapper1">
        <Content />        
        {(Object.values(countriesList)[0] !== 404) ? 
        countriesList.map((country) => (
          <CountryMiniCard {...country} key={country.alpha2Code} />
        )) : 'Oops...No Such Country Exists'
        }        
      </div>
    </div>
  );
}

export default App;
