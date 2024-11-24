// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

import { ForecastResponse } from "@/src/types/api/ForecastResponse";
import { WeatherResponse } from "@/src/types/api/WeatherResponse";


const baseUrl = "https://api.openweathermap.org/data/2.5/"
const apiKey =  "3dce9b1c66837262a25b3f448d354a76"
interface WeatherProps {
  city: string;
}
interface ForecastProps {
  lat: string;
  lon: string;
}
export async function callWeatherApi({ city }: WeatherProps) :Promise<WeatherResponse> {
  const res = await fetch(
    baseUrl + `weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return await res.json();
}

export async function callForecastApi({ lat, lon }: ForecastProps) :Promise<ForecastResponse> {
  const res = await fetch(
     baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return await res.json();
}
