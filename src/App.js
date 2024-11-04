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
        <a href="https://github.com/OShaniceO/react-weather">GitHub</a> and
        hosted on{" "}
        <a href="https://app.netlify.com/sites/endearing-tanuki-7c9677/overview">
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
