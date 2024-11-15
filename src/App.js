import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";

const capitalizeCityName = (city) => {
  return city
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const fixDateTimeFormat = (datetime) => {
  const [date, time] = datetime.split(":");
  return `${date}T${time}:00:00`;
};

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

function App() {
  const [city, setCity] = useState(capitalizeCityName("cape town"));
  const [temperatureC, setTemperatureC] = useState(15);
  const [temperatureF, setTemperatureF] = useState(celsiusToFahrenheit(15));
  const [humidity, setHumidity] = useState("50%");
  const [windspeed, setWindspeed] = useState("10 km/h");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState("");

  const formatDateTime = (datetime) => {
    try {
      const fixedDatetime = fixDateTimeFormat(datetime);
      const dateObj = new Date(fixedDatetime);
      if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date");
      }
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(dateObj);
    } catch (err) {
      console.error("Date formatting error:", err);
      return "Invalid time value";
    }
  };

  const fetchWeatherData = async (searchedCity) => {
    setError(null);
    try {
      const apiKey = "cac0fb3b4f644470bf1402019e63b59f";
      const encodedCity = encodeURIComponent(searchedCity);

      const weatherResponse = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${encodedCity}&key=${apiKey}&units=M`
      );

      if (!weatherResponse.ok) {
        setError("Error fetching current weather data");
        return;
      }

      const weatherData = await weatherResponse.json();

      if (weatherData.data.length > 0) {
        const weather = weatherData.data[0];
        const tempC = Math.round(weather.temp);
        const tempF = Math.round(celsiusToFahrenheit(tempC));

        setTemperatureC(tempC);
        setTemperatureF(tempF);
        setHumidity(`${weather.rh}%`);
        setWindspeed(`${weather.wind_spd} m/s`);
        setWeatherIcon(weather.weather.icon || "");

        const formattedDateTime = formatDateTime(weather.datetime);
        setCurrentDateTime(formattedDateTime);
      } else {
        setError("No data found for the city.");
      }
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
          <CurrentWeather
            city={city}
            temperatureC={temperatureC}
            temperatureF={temperatureF}
            isCelsius={isCelsius}
            humidity={humidity}
            windspeed={windspeed}
            currentDateTime={currentDateTime}
            weatherIcon={weatherIcon}
          />
        )}
      </div>
      <button onClick={toggleUnit} style={{ marginTop: "20px" }}>
        {isCelsius ? "Switch to °F" : "Switch to °C"}
      </button>
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
