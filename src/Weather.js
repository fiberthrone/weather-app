import { useEffect, useState } from "react";
import WeatherBadge from "./WeatherBadge";
import "./Weather.css";

function useWeatherData({ apiKey, lat, lon }) {
  const [state, setState] = useState({ stage: "pending", data: null });

  useEffect(() => {
    fetchWeatherData();

    async function fetchWeatherData() {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
        ).then((response) => response.json());

        setState({ stage: "success", data });
      } catch (e) {
        setState({ stage: "failure", data: null });
      }
    }
  }, []);

  return state;
}

function extractWeatherBadgeProps(weatherEntry) {
  const temperature = weatherEntry.temp;
  const windSpeed = weatherEntry.wind_speed;
  const iconCode = weatherEntry.weather?.[0]?.icon;
  const when = weatherEntry.dt;

  return { temperature, windSpeed, iconCode, when };
}

function Weather(props) {
  const { stage, data } = useWeatherData(props);

  if (stage === "pending") {
    return "Loading...";
  } else if (stage === "failure") {
    return "Failed to load weather data 😔";
  }

  const currentWeather = extractWeatherBadgeProps(data.current);
  const nextHoursWeather = data.hourly.slice(1, 24).map(extractWeatherBadgeProps);

  return (
    <div>
      <WeatherBadge {...currentWeather} when="Now" className="Weather-Current" size="m" />
      {nextHoursWeather.map((weather) => (
        <WeatherBadge key={weather.when} {...weather} className="Weather-Hourly" size="s" />
      ))}
    </div>
  );
}

export default Weather;
