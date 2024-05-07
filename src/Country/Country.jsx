import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleCountryList }) => {
  const { name, flags, area, capital, maps } = country;
  const [isVisited, setVisitid] = useState(false);
  const handleVisited = () => {
    setVisitid(!isVisited);
  };
  return (
    <div className={isVisited ? "visit" : "country-css"}>
      <img src={flags.png} alt="" />
      <h3>Country Name: {name.common}</h3>
      <p>Area: {area}</p>
      <p>Capital: {capital}</p>
      <p>
        Map Links:{" "}
        <a href={maps.googleMaps} target="_blank">
          Go to map
        </a>
      </p>
      <button
        onClick={() => {
          handleVisited();
          handleCountryList(country);
        }}
      >
        Visited
      </button>
    </div>
  );
};

export default Country;
