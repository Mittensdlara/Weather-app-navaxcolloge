import { useState, useEffect } from "react";
import ForecastList from "./ForecastList";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import { callForecastApi, callWeatherApi } from "@/src/pages/api/api";
import { ForecastResponse } from "@/src/types/api/ForecastResponse";

interface Weather {
  city: string;
  wind: number;
  humidity: number;
  description: string;
  icon: string;
  daily: [];
}

const Weather = () => {
  const [weatherState, setWeatherState] = useState<Weather>({
    city: "",
    wind: 0,
    humidity: 0,
    description: "",
    icon: "",
    daily: [],
  });
  const [forecastState, setForecastState] = useState<ForecastResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true); 

  const getWeatherData = async (city: string) => {
    try {
      setLoading(true); 

      const weatherResponse = await callWeatherApi({ city });
      const weather: Weather = {
        city: weatherResponse.name,
        wind: weatherResponse.wind.speed,
        humidity: weatherResponse.main.humidity,
        description: weatherResponse.weather[0].description,
        icon: weatherResponse.weather[0].icon,
        daily: [],
      };
      setWeatherState(weather);

      const forecastResponse = await callForecastApi({ city });
      setForecastState(forecastResponse);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getWeatherData("Tehran");
  }, []);

  return (
    <div className="bg-white shadow mt-4 rounded-2xl p-8 py-16 max-w-4xl mx-auto">
      <SearchForm city={weatherState.city} getWeatherData={getWeatherData} />
      {loading ? (
        <p className="text-center text-gray-500">Loading weather data...</p>
      ) : (
        <>
          <WeatherInfo weather={weatherState} />
          <ForecastList forecast={forecastState} />
        </>
      )}
    </div>
  );
};

export default Weather;
