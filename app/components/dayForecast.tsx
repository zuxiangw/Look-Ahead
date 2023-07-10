import Image from "next/image";
import DayForecastTemp from "./dayForecastTemp";
const DayForecast = ({ day }: any) => {
  const date: string = day.date.split("-").slice(1, 3).join("-");

  const weather_text: string = day.day.condition.text;
  const weather_icon_url: string = day.day.condition.icon;

  return (
    <div className="h-full w-full p-4 text-xl">
      <div className="text-3xl">{date}</div>
      <div className="my-4">
        <div className="text-2xl capitalize font-bold">{weather_text}</div>
        <div className="relative h-16 w-16 mx-auto">
          <Image
            src={`/api/weather-icon-photo?url=${weather_icon_url}`}
            alt={weather_text}
            fill={true}
          />
        </div>
      </div>
      <DayForecastTemp day={day} />
    </div>
  );
};

export default DayForecast;
