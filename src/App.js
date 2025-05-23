// App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherList, setWeatherList] = useState([]);


  const getCoordinates = async (cityName) => {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
    );
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found");
    }
    return {
      lat: data.results[0].latitude,
      lon: data.results[0].longitude,
      name: data.results[0].name,
      country: data.results[0].country,
    };
  };

  

 const getWeather = async () => {
  if (!city.trim()) {
    setError("Please enter a city name");
    return;
  }

  try {
    setLoading(true);
    setError("");
    const { lat, lon, name, country } = await getCoordinates(city);
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`
    );
    const data = await res.json();

    const newWeather = {
      id: `${name}-${Date.now()}`,
      temperature: data.current.temperature_2m,
      windspeed: data.current.wind_speed_10m,
      weathercode: data.current.weather_code,
      name,
      country,
    };

    setWeatherList((prev) => [newWeather, ...prev]);
    setCity("");
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  // Weather code descriptions
  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail"
    };
    return weatherCodes[code] || `Unknown (${code})`;
  };

 return (
  <div className="app">
    <h1>Weather App 🌤️</h1>
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={getWeather} disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </div>

    {error && <p className="error">{error}</p>}

    {weatherList.length > 0 && (
      <div className="weather-list">
        {weatherList.map((weather) => (
          <div className="weather-info" key={weather.id}>
            <h2>{weather.name}, {weather.country}</h2>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Wind Speed: {weather.windspeed} km/h</p>
            <p>Weather: {getWeatherDescription(weather.weathercode)}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}


export default App;