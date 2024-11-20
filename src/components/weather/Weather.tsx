import ForecastList from "./ForecastList";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
  return (
    <>
      <SearchForm />
      <WeatherInfo />
      <ForecastList />
    </>
  );
};

export default Weather;
