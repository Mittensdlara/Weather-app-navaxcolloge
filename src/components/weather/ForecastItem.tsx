import { ForecastResponse } from "@/src/types/api/ForecastResponse";

interface Props {
  forecast: ForecastResponse;
}

const ForecastItem = ({ forecast }: Props) => {
  const getWeekday = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  const limitedDays = forecast.days.slice(0, 5);

  return (
    <div className="">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {limitedDays.map((day, index) => (
          <li
            key={index}
            className="forecast-card p-4 bg-blue-50 rounded-xl shadow transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:bg-blue-100"
          >
            <p className="font-semibold text-lg">{getWeekday(day.datetime)}</p>
            <p className="text-xl font-bold mt-2">{day.temp}°C</p>
            <p className="text-gray-600 mt-1">{day.conditions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastItem;
