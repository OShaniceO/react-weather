import React from "react";

function CurrentWeather({
  city,
  temperatureC,
  temperatureF,
  isCelsius,
  humidity,
  windspeed,
  weatherIcon,
  time,
}) {
  return (
    <div>
      <h1>
        <strong>{city}</strong>
      </h1>
      <div>
        <p>
          <strong>{time}</strong>
        </p>
        <p>
          Humidity: <strong>{humidity}</strong>
        </p>
        <p>
          Wind: <strong>{windspeed}</strong>
        </p>
      </div>
      <div className="current">
        <strong>{isCelsius ? `${temperatureC}°C` : `${temperatureF}°F`}</strong>
      </div>
      <div className="current" id="weather-icon">
        {weatherIcon ? (
          <img
            src={weatherIcon}
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
