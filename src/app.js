import React, { useState } from "react";
import Search from "./search";
import Weather from "./weather";

function App() {
  const [city, setCity] = useState("New York");
  const [data, setData] = useState();

  return (
    <div>
      <Search city={city} onCityChange={setCity} setWeather={setData} />
      {data && <Weather city={city} weather={data} />}
    </div>
  );
}

export default App;
