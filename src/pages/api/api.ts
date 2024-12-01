

import { ForecastResponse } from "@/src/types/api/ForecastResponse";
import { WeatherResponse } from "@/src/types/api/WeatherResponse";


const baseUrl = "https://api.openweathermap.org/data/2.5/"
const apiKey =  "3dce9b1c66837262a25b3f448d354a76"
interface WeatherProps {
  city: string;
}

export async function callWeatherApi({ city }: WeatherProps) :Promise<WeatherResponse> {
  const res = await fetch(
    baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return await res.json();
}

export async function callForecastApi({ city }: WeatherProps) :Promise<ForecastResponse> {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=7VVFUATZ7YTVCA8DU8W3VFW77&contentType=json`
  );
  return await res.json();
}
