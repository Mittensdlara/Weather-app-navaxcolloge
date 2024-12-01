import { useState } from "react";

interface Props {
  city: string;
  getWeatherData: (city: string) => void;
}

const SearchForm = ({ city, getWeatherData }: Props) => {
  const [inputCity, setInputCity] = useState(city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCity.trim()) {
      getWeatherData(inputCity);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-8">
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city name"
        className="border rounded-l px-4 py-2 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
