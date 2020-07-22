import React from "react";

const CountryCard = (props) => (
  <div className="country-card">
    <img src="" alt="" />
    <h2>Belgium</h2>
    <div className="country-details">
      <section className="part1">
        <p>
          <label htmlFor="">Native Name</label>:
        </p>
        <p>
          <label htmlFor="">Population</label>:
        </p>
        <p>
          <label htmlFor="">Region</label>:
        </p>
        <p>
          <label htmlFor="">Sub-region</label>:
        </p>
        <p>
          <label>Capital</label>:
        </p>
      </section>
      <section className="part2">
        <p>
          <label htmlFor="">Top Level Domain</label>:
        </p>
        <p>
          <label htmlFor="">Currencies</label>:
        </p>
        <p>
          <label htmlFor="">Languages</label>:
        </p>
      </section>
      <section className="borders">Borders</section>
    </div>
  </div>
);

export default CountryCard;
