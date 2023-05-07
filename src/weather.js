import React from "react";

const Weather = ({ weather, city }) => {
  return (
    <>
      <h1>{city}</h1>
      <div>{weather?.main?.temp}</div>
      <div>{weather?.main?.feels_like}</div>
    </>
  );
};

export default Weather;
