import React from "react";

function CurrentWeather({
  city,
  temperatureC,
  temperatureF,
  isCelsius,
  humidity,
  windspeed,
  currentDateTime,
  weatherIcon,
}) {
  return (
    <div>
      <h1 className="bebas-neue-regular">
        <strong>{city}</strong>
      </h1>
      <br />
      <div>
        <p className="main">
          <strong>{currentDateTime}</strong>{" "}
          {}
        </p>

        <p className="main-2">
          Humidity:{" "}
          <span className="blue">
            <strong>{humidity}</strong>
          </span>
          Wind:{" "}
          <span className="blue">
            <strong>{windspeed}</strong>
          </span>
          Description:{" "}
          <span className="blue">
            <strong>Clear Sky</strong>
          </span>
        </p>
      </div>
      <div className="current">
        {}
        <strong>{isCelsius ? `${temperatureC}°C` : `${temperatureF}°F`}</strong>
      </div>

      {}
      <div className="current" id="weather-icon">
        {weatherIcon ? (
          <img
            src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}
            alt="Weather Icon"
            style={{ width: "100px", height: "100px" }}
          />
        ) : (
          "⛅" 
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
