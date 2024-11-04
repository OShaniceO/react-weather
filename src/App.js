import React, { useState } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function App() {
  const [city, setCity] = useState("Cape Town");
  const [temperature, setTemperature] = useState("15°C");

  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
    const fakeTemperature = Math.floor(Math.random() * 30) + "°C";
    setTemperature(fakeTemperature);
  };

  return (
    <div className="container">
      <SearchBar onCitySearch={handleCitySearch} />
      <div className="cont">
        {}
        <CurrentWeather city={city} temperature={temperature} />
        <Forecast />
      </div>
      <footer>
        Coded By Shanice Jones on{" "}
        <a href="https://www.shecodes.io/">SheCodes</a> and is on{" "}
        <a href="https://github.com/OShaniceO/Weather-App-Project">GitHub</a>{" "}
        and hosted on{" "}
        <a href="https://curious-truffle-2c4059.netlify.app/">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
