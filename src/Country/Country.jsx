import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, area, capital, maps } = country;
  console.log(maps.googleMaps);
  return (
    <div className={"country-css"}>
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
    </div>
  );
};

export default Country;
