"use client";
import { useState } from "react";
import TempExchange from "./dayForecastTempExchange";
import Image from "next/image";
const DayForecastTemp = ({ day }: any) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const maxtemp_c: number = day.day.maxtemp_c;
  const maxtemp_f: number = day.day.maxtemp_f;
  const mintemp_c: number = day.day.mintemp_c;
  const mintemp_f: number = day.day.mintemp_f;
  const avgtemp_c: number = day.day.avgtemp_c;
  const avgtemp_f: number = day.day.avgtemp_f;

  const revertTemp = () => {
    setIsCelsius((isCelsius) => !isCelsius);
  };

  return (
    <div className="bg-sky-300 rounded-xl p-2 my-4">
      <div className="grid grid-cols-10 my-4">
        <div className="col-start-2 col-end-4">
          <HeaderTemp
            description="Min Temp:"
            temp_c={mintemp_c}
            temp_f={mintemp_f}
            isCelsius={isCelsius}
          />
        </div>
        <div className="col-start-5 col-end-7">
          <HeaderTemp
            description="Avg Temp:"
            temp_c={avgtemp_c}
            temp_f={avgtemp_f}
            isCelsius={isCelsius}
          />
        </div>
        <div className="col-start-8 col-end-10">
          <HeaderTemp
            description="Max Temp:"
            temp_c={maxtemp_c}
            temp_f={maxtemp_f}
            isCelsius={isCelsius}
          />
        </div>
        <button
          className="col
        -start-10 col-end-11 bg-white w-8 h-8 m-auto border-2 border-black rounded-full transition-colors hover:bg-yellow-300"
          onClick={revertTemp}
        >
          {isCelsius && <div>C</div>}
          {!isCelsius && <div>F</div>}
        </button>
      </div>
      <div className="grid grid-cols-[24] grid-flow-col overflow-x-scroll border-2 border-black rounded-xl">
        {day.hour.map((hour: any) => {
          return (
            <HourTemp
              key={hour.time_epoch}
              icon_url={hour.condition.icon}
              hour={hour.time.split(" ")[1]}
              temp_c={hour.temp_c}
              temp_f={hour.temp_f}
              isCelsius={isCelsius}
            />
          );
        })}
      </div>
    </div>
  );
};

const HeaderTemp = ({
  description,
  temp_c,
  temp_f,
  isCelsius,
}: {
  description: string;
  temp_c: number;
  temp_f: number;
  isCelsius: boolean;
}) => {
  return (
    <div>
      <h1>{description}</h1>
      <TempExchange temp_c={temp_c} temp_f={temp_f} isCelsius={isCelsius} />
    </div>
  );
};

const HourTemp = ({
  icon_url,
  hour,
  temp_c,
  temp_f,
  isCelsius,
}: {
  icon_url: string;
  hour: string;
  temp_c: number;
  temp_f: number;
  isCelsius: boolean;
}) => {
  return (
    <div className="w-36 p-2">
      <div>{hour}</div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-16 w-16">
          <Image
            src={`/api/weather-icon-photo?url=${icon_url}`}
            alt={icon_url}
            fill={true}
          />
        </div>
        <TempExchange temp_c={temp_c} temp_f={temp_f} isCelsius={isCelsius} />
      </div>
    </div>
  );
};

export default DayForecastTemp;
