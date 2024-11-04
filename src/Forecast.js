import React from "react";

function Forecast() {
  return (
    <div id="forecast" className="forecast">
      <div className="forecast-day">
        <h3>Saturday</h3>
        <div>🌦</div> {}
        <i
          className="fas fa-cloud-sun"
          style={{ fontSize: "50px", color: "gray" }}
        ></i>
        <p>
          <span className="min-temp">10°C</span> /{" "}
          <span className="max-temp">20°C</span>
        </p>
      </div>
      <div className="forecast-day">
        <h3>Sunday</h3>
        <div>☀️</div> {}
        <i
          className="fas fa-cloud-sun"
          style={{ fontSize: "50px", color: "gray" }}
        ></i>
        <p>
          <span className="min-temp">12°C</span> /{" "}
          <span className="max-temp">22°C</span>
        </p>
      </div>
      <div className="forecast-day">
        <h3>Monday</h3>
        <div>⛅</div> {}
        <i
          className="fas fa-cloud"
          style={{ fontSize: "50px", color: "gray" }}
        ></i>
        <p>
          <span className="min-temp">13°C</span> /{" "}
          <span className="max-temp">19°C</span>
        </p>
      </div>
      <div className="forecast-day">
        <h3>Tuesday</h3>
        <div>🌧️</div> {}
        <i
          className="fas fa-cloud-showers-heavy"
          style={{ fontSize: "50px", color: "gray" }}
        ></i>
        <p>
          <span className="min-temp">11°C</span> /{" "}
          <span className="max-temp">18°C</span>
        </p>
      </div>
    </div>
  );
}

export default Forecast;
