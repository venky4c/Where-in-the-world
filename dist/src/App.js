import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import CountryMiniCard from "./components/CountryMiniCard";
import CountryCard from "./components/CountryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "./redux/actions";

function App(props) {
  const countries = useSelector((state) => state.countries);
  const { countriesList } = countries;
  console.log("countries are", countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAllCountries());
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <Content />
        {countriesList.map((country) => (
          <CountryCard {...country} />
        ))}
      </div>
    </div>
  );
}

export default App;
