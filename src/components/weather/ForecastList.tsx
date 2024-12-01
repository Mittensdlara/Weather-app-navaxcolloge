import { ForecastResponse } from "@/src/types/api/ForecastResponse";
import ForecastItem from "./ForecastItem";

interface Props {
  forecast: ForecastResponse | null;
}

const ForecastList = ({ forecast }: Props) => {
  if (!forecast) return <p>Loading ....</p>;
  return (
    <>
      <ForecastItem forecast={forecast} />
    </>
  );
};

export default ForecastList;
