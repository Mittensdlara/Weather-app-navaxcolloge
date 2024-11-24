import { useState } from "react";
import ForecastList from "./ForecastList";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import { callWeatherApi } from "@/src/pages/api/api";
import { log } from "console";

interface Props {
  city: string;
}

const Weather = ({ city }: Props) => {
  const [weatherState, setWeatherState] = useState<Weather>({
    city: "",
    wind: 0,
    humidity: 0,
    description: "",
    icon: "",
    daily: [],
  });

  const getWeatherData = async (city: string) => {
    const response = await callWeatherApi({ city });
    const weather: Weather = {
      city: response.name,
      wind: response.wind.speed,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      daily: [],
    };
    setWeatherState(weather);
  };
  if (weatherState.city.length === 0) {
    getWeatherData(city);
  }

  return (
    <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16"}>
      <SearchForm city={city} getWeatherData={getWeatherData}/>
      <WeatherInfo weather={weatherState}/>
      <ForecastList />
    </div>
  );
};

export default Weather;
