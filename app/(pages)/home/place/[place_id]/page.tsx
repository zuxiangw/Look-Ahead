import SlideShow from "@/app/components/placeComponents/photoSlideshow";
import PlaceReviewsContainer from "@/app/components/placeComponents/PlaceReviewsContainer";
const Page = async ({ params }: { params: { place_id: string } }) => {
  const place_data = await fetchData(params.place_id);
  const weather_data = place_data.location
    ? await fetchWeather(place_data.location.lat, place_data.location.lon)
    : undefined;
  return (
    <section className="mt-8" id="main-page">
      <NameAndRating
        name={place_data.place_name}
        rating={place_data.rating}
        amount={place_data.rating_total}
      />
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <HeaderUnderbar />
      </div>
      <SlideShow photo_references={place_data.photo_references} />
      <BusinessInfo
        address={place_data.address}
        phone={place_data.phone}
        website={place_data.website}
        business_status={place_data.business_status}
        open_now={place_data.open_now}
        hours={place_data.hours}
      />
      {weather_data ? (
        <Weather
          current={weather_data.current}
          forecast={weather_data.forecast.forecastday}
        />
      ) : (
        <section className="text-center mt-16 flex flex-col items-center">
          <div>
            <h1 className="text-4xl font-bold">Weather</h1>
            <HeaderUnderbar />
          </div>
          <div>No Weather Data Available</div>
        </section>
      )}
      <PlaceReviewsContainer
        google_reviews={place_data.reviews}
        place_id={params.place_id}
      />
    </section>
  );
};

import { GET_placeDetails } from "@/app/utils/routeHandlers/placeDetails";
const fetchData = async (place_id: string) => {
  const res = await GET_placeDetails(place_id);
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  const data = await res.json();
  return data.data;
};

import { GET_weather } from "@/app/utils/routeHandlers/weather";
const fetchWeather = async (lat: number, lon: number) => {
  const res = await GET_weather(lat.toString(), lon.toString());
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }
  const data = await res.json();
  return data.data;
};

import PlaceRating from "@/app/components/placeRating";
const NameAndRating = ({
  name,
  rating,
  amount,
}: {
  name: string | undefined;
  rating: number | undefined;
  amount: number | undefined;
}) => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">{name ? name : "*Name not found*"}</h1>
      {rating && amount && (
        <PlaceRating rating={rating} amount={amount} size={36} />
      )}
    </section>
  );
};

import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { IoBusinessOutline } from "react-icons/io5";
import { BsDoorClosed } from "react-icons/bs";
import HeaderUnderbar from "@/app/components/headerUnderbar";
const BusinessInfo = ({
  address,
  phone,
  website,
  business_status,
  open_now,
  hours,
}: {
  address: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  business_status: string | undefined;
  open_now: boolean | undefined;
  hours: string[] | undefined;
}) => {
  const processed_hours: string[] | undefined = hours
    ? hours.map((hour: string) => {
        return hour.split(" ").slice(1).join(" ");
      })
    : undefined;
  return (
    <section className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl font-bold">Business Info</h1>
      <HeaderUnderbar />
      {/*Desktop Display */}
      <div className="sm:grid flex flex-col grid-cols-5 w-full mt-8">
        <section className="col-start-1 col-end-4">
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 flex flex-col justify-center items-center">
              <BiMap className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {address ? address : "N/A"}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <AiOutlinePhone className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {phone ? phone : "N/A"}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <TfiWorld className="w-10 h-auto text-sky-500" />
            </div>
            <h1 className="text-2xl col-start-3 col-end-9 mr-auto">
              {website ? website : "N/A"}
            </h1>
          </div>
          <div className="flex items-center justify-center mb-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <IoBusinessOutline className="w-10 h-auto text-sky-500" />
            </div>
            <h1
              className={`text-2xl col-start-3 col-end-9 mr-auto ${
                business_status === "OPERATIONAL"
                  ? "text-green-500"
                  : business_status === "CLOSED_TEMPORARILY"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {business_status ? business_status.replace("_", " ") : "N/A"}
            </h1>
          </div>
          <div className="flex items-center justify-center my-8 grid grid-cols-8">
            <div className="col-start-1 col-end-3 mx-auto">
              <BsDoorClosed className="w-10 h-auto text-sky-500" />
            </div>
            <h1
              className={`text-2xl col-start-3 col-end-9 mr-auto ${
                open_now ? "text-green-500" : "text-red-500"
              }`}
            >
              {open_now === undefined
                ? "N/A"
                : open_now
                ? "OPEN NOW"
                : "CLOSED"}
            </h1>
          </div>
        </section>
        <section className="col-start-4 col-end-6 grid grid-rows-7">
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">MON:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[0] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">TUE:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[1] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">WED:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[2] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">THU:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[3] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">FRI:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[4] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">SAT:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[5] : "N/A"}
            </h1>
          </div>
          <div className="grid grid-cols-8 mb-4">
            <h1 className="text-2xl col-start-2 col-end-3">SUN:</h1>
            <h1 className="text-2xl col-start-4 col-end-9 mr-auto">
              {processed_hours ? processed_hours[6] : "N/A"}
            </h1>
          </div>
        </section>
      </div>
      {/*Mobile Display */}
    </section>
  );
};

const Weather = ({ current, forecast }: any) => {
  return (
    <section className="text-center mt-16 flex flex-col items-center">
      <div>
        <h1 className="text-4xl font-bold">Weather</h1>
        <HeaderUnderbar />
      </div>
      <CurrentWeather current={current} />
      <FutureWeather forecast={forecast} />
    </section>
  );
};

import Image from "next/image";
import ExchangingMeasurements from "@/app/components/placeComponents/DayForecast/exchangingMeasurements";
const CurrentWeather = ({ current }: any) => {
  const currentTime: string = current.last_updated.split(" ")[1];

  return (
    <section className="mt-8 bg-sky-300 sm:w-[38rem] w-5/6 rounded-xl">
      <div className="text-3xl font-bold my-4">Now</div>
      <div>
        <h1 className="text-4xl font-bold w-min p-4 bg-white mx-auto rounded-xl">
          {currentTime}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl capitalize font-bold">
          {current.condition.text}
        </h1>
        <div className="relative h-16 w-16">
          <Image
            src={`/api/place/weather-icon-photo?url=${current.condition.icon}`}
            alt={current.condition.text}
            fill={true}
          />
        </div>
      </div>
      <div>
        <ExchangingMeasurements
          m1_val={current.temp_c}
          m2_val={current.temp_f}
          m1_text="C"
          m2_text="F"
          description="Temperature Now"
          isTemp={true}
        />
      </div>
      <div className="mt-2">
        <ExchangingMeasurements
          m1_val={current.wind_mph}
          m2_val={current.wind_kph}
          m1_text="MPH"
          m2_text="KPH"
          description="Wind Speed"
          isTemp={false}
        />
      </div>
      <div className="mt-2">
        <ExchangingMeasurements
          m1_val={current.precip_mm}
          m2_val={current.precip_in}
          m1_text="mm"
          m2_text="in"
          description="Precipitation Level"
          isTemp={false}
        />
      </div>
      <div className="text-2xl mt-2">
        <div className="text-2xl grid grid-cols-10 px-4">
          <div className="col-start-2 col-end-6 flex justify-center mr-auto">
            Cloud Coverage:
          </div>
          <div className="col-start-7 col-end-8">
            <strong>{current.cloud}%</strong>
          </div>
        </div>
      </div>
      <div className="text-2xl mt-2 mb-8">
        <div className="text-2xl grid grid-cols-10 px-4">
          <div className="col-start-2 col-end-6 flex justify-center mr-auto">
            UV Index:
          </div>
          <div className="col-start-7 col-end-8">
            <strong>{current.uv}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

import DayForecast from "@/app/components/placeComponents/DayForecast/dayForecast";
const FutureWeather = ({ forecast }: any) => {
  return (
    <section className="flex mt-8 w-full overflow-auto pb-0">
      {forecast.map((day: any) => {
        return (
          <div key={day.date_epoch} className="mr-8 w-[30rem]">
            <DayForecast day={day} />
          </div>
        );
      })}
    </section>
  );
};

export default Page;
