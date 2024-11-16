import React from "react";

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

function Forecast({ forecast, isCelsius }) {
  return (
    <div className="forecast-section">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>
            {new Date(day.time * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h3>
          <img src={day.condition.icon_url} alt="Weather Icon" />
          <p>
            {isCelsius
              ? `${Math.round(day.temperature.day)}°C`
              : `${Math.round(celsiusToFahrenheit(day.temperature.day))}°F`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
