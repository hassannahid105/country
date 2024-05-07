import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryList, SetCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleCountryList = (country) => {
    const newCountryList = [...countryList, country];
    SetCountryList(newCountryList);
  };
  console.log(countryList);
  return (
    <div>
      <h3>Country length: {countries.length}</h3>
      <div>
        <ul>
          {countryList.map((countryName, idx) => (
            <li key={idx}>
              <img className={"box"} src={countryName.flags.png} alt="" />
              {countryName.name.common}
            </li>
          ))}
        </ul>
      </div>
      <div className={"countries-container"}>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleCountryList={handleCountryList}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
