import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

interface Props {
  city: string,
  getWeatherData: Function
}
const SearchForm = ({ city , getWeatherData}: Props) => {
  const [cityName, setCityName] = useState<string>(city);

  const cityNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };


const formSubmitHandler  = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
 getWeatherData(cityName)

 }


  return (
    <form onSubmit={formSubmitHandler} className="m-auto flex justify-center border-b-2 pb-6 mb-6">
      <input
        type="text"
        name="cityName"
        className="border rounded p-3"
        onChange={cityNameChangeHandler}
        value={cityName}
      />
      <input
        type="submit"
        className="bg-primary px-6 py-3 ml-3 text-white rounded"
      />
    </form>
  );
};

export default SearchForm;
