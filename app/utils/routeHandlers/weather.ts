import { NextResponse } from "next/server";
const GET = async (lat: string | null, lon: string | null) => {
  if (!lat || !lon) {
    return NextResponse.json({
      status: 510,
      message: "Need to provide both latitude and longitude",
    });
  }
  const api_key = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${lat},${lon}&days=3&aqi=no&alerts=no`;

  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json({
      status: 500,
      message: "The weather data requested is not abled to be fetched",
    });
  }

  const data = await res.json();

  return NextResponse.json({ status: 200, data: data });
};

export { GET as GET_weather };
