import cx from "classnames";
import clearSky from "./clear-sky-192x192.png";
import fewClouds from "./few-clouds-192x192.png";
import clouds from "./clouds-192x192.png";
import rain from "./rain-192x192.png";
import thunderstorm from "./thunderstorm-192x192.png";
import snow from "./snow-192x192.png";
import mist from "./mist-192x192.png";
import "./WeatherBadge.css";

function getIcon(iconCode) {
  if (iconCode === "01d" || iconCode === "01n") {
    return clearSky;
  } else if (iconCode === "02d" || iconCode === "02n") {
    return fewClouds;
  } else if (iconCode === "03d" || iconCode === "03n" || iconCode === "04d" || iconCode === "04n") {
    return clouds;
  } else if (iconCode === "09d" || iconCode === "09n" || iconCode === "10d" || iconCode === "10n") {
    return rain;
  } else if (iconCode === "11d" || iconCode === "11n") {
    return thunderstorm;
  } else if (iconCode === "13d" || iconCode === "13n") {
    return snow;
  } else if (iconCode === "50d" || iconCode === "50n") {
    return mist;
  }
}

function WeatherBadge(props) {
  const title =
    typeof props.when === "string"
      ? props.when
      : new Date(props.when * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const iconUrl = getIcon(props.iconCode);
  const temperatureStr = `${Math.round(props.temperature)}°C`;

  return (
    <div className={cx("WeatherBadge", `WeatherBadge_size_${props.size}`, props.className)}>
      <div className="WeatherBadge-Title">{title}</div>
      <div className="WeatherBadge-Content">
        <div className="WeatherBadge-Icon">
          <img src={iconUrl} alt="" width={props.size === "m" ? 64 : 48} />
        </div>
        <div className="WeatherBadge-Temperature">{temperatureStr}</div>
      </div>
    </div>
  );
}

export default WeatherBadge;
