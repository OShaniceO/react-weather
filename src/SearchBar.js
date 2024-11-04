import React, { useState } from "react";

function SearchBar({ onCitySearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onCitySearch(city);
    }
    setCity("");
  };

  return (
    <div className="search-container">
      <form className="box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search For Your City"
          id="search-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="Search" id="button" />
      </form>
    </div>
  );
}

export default SearchBar;
