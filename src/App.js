import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const capitalizeCityName = (city) => {
  return city
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

function App() {
  const [city, setCity] = useState(capitalizeCityName("Cape Town"));
  const [temperatureC, setTemperatureC] = useState(15);
  const [temperatureF, setTemperatureF] = useState(celsiusToFahrenheit(15));
  const [humidity, setHumidity] = useState("50%");
  const [windspeed, setWindspeed] = useState("10 m/s");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [time, setTime] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeatherData = async (searchedCity) => {
    setError(null);
    try {
      const apiKey = "8e1oeft5a9242f18ee913e0b45ad1a06";
      const encodedCity = encodeURIComponent(searchedCity);

      const currentWeatherResponse = await fetch(
        `https://api.shecodes.io/weather/v1/current?query=${encodedCity}&key=${apiKey}&units=metric`
      );

      if (!currentWeatherResponse.ok) {
        setError("Error fetching current weather data.");
        return;
      }

      const currentWeatherData = await currentWeatherResponse.json();
      setTemperatureC(Math.round(currentWeatherData.temperature.current));
      setTemperatureF(
        Math.round(celsiusToFahrenheit(currentWeatherData.temperature.current))
      );
      setHumidity(`${currentWeatherData.temperature.humidity}%`);
      setWindspeed(`${currentWeatherData.wind.speed} m/s`);
      setWeatherIcon(currentWeatherData.condition.icon_url || "");

      const dateObj = new Date(currentWeatherData.time * 1000);
      const formattedTime = `${dateObj.toLocaleDateString("en-US", {
        weekday: "long",
      })}, ${dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`;
      setTime(formattedTime);

      const forecastResponse = await fetch(
        `https://api.shecodes.io/weather/v1/forecast?query=${encodedCity}&key=${apiKey}&units=metric`
      );

      if (!forecastResponse.ok) {
        setError("Error fetching forecast data.");
        return;
      }

      const forecastData = await forecastResponse.json();
      setForecast(forecastData.daily.slice(1, 6));
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleCitySearch = (searchedCity) => {
    const formattedCity = capitalizeCityName(searchedCity);
    setCity(formattedCity);
  };

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="container">
      <SearchBar onCitySearch={handleCitySearch} />
      <div className="cont">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <CurrentWeather
              city={city}
              temperatureC={temperatureC}
              temperatureF={temperatureF}
              isCelsius={isCelsius}
              humidity={humidity}
              windspeed={windspeed}
              weatherIcon={weatherIcon}
              time={time}
            />
            <Forecast forecast={forecast} isCelsius={isCelsius} />
          </>
        )}
      </div>
      <br/>
      <button onClick={toggleUnit} className="toggle-unit-button">
        {isCelsius ? "Switch to °F" : "Switch to °C"}
      </button>
      <br/>
      <footer>
        Coded By Shanice Jones on{" "}
        <a href="https://www.shecodes.io/">SheCodes</a> and is on{" "}
        <a href="https://github.com/OShaniceO/react-weather">GitHub</a> and
        hosted on{" "}
        <a href="https://app.netlify.com/sites/dancing-arithmetic-ba1c3f/overview">
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
