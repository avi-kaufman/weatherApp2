import React from "react";
import axios from "axios";

function Search({ city, onCityChange, setWeather }) {
  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    const KEY = "------";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`;
    axios.get(url).then((res) => {
      // console.log(res);
      if (res.status == 200) {
        const weather = res.data;
        setWeather(weather);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(event) => onCityChange(event.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
