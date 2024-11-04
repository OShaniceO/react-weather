import React from "react";

function CurrentWeather({ city, temperature }) {
  return (
    <div>
      <h1 className="bebas-neue-regular">
        <strong>{city}</strong> {}
      </h1>
      <div>
        <p className="main">Friday 9:43pm</p>
        <p className="main-2">
          Humidity:{" "}
          <span className="blue">
            <strong>50%</strong>
          </span>
          , Wind:{" "}
          <span className="blue">
            <strong>8.0 km/h</strong>
          </span>
          , Description:{" "}
          <span className="blue">
            <strong>Clear Sky</strong>
          </span>
        </p>
      </div>
      <div className="current">
        <strong>{temperature}</strong> {}
      </div>
      <div className="current">⛅</div>
      <div className="current" id="weather-icon">
        <i
          className="fas fa-cloud-sun"
          style={{ fontSize: "100px", color: "orange" }}
        ></i>
      </div>
    </div>
  );
}

export default CurrentWeather;
