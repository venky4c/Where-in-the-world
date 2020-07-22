import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import CountryCard from "./components/CountryCard";

const Main = () => (
  <div className="wrapper">
    <Header />
    <Content />
    <CountryCard />
  </div>
);

export default Main;
