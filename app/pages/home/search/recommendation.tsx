"use client";

import { useEffect, useState } from "react";
import RecommendData from "@/app/interfaces/RecommendData";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

const Recommendation = () => {
  const [recommendPlaces, setRecommendPlaces] = useState<
    RecommendData[] | null
  >(null);
  const [nextToken, setNextToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onLocationSuccess,
        onLocationError
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const fillUpRecommendations = async (latitude: number, longitude: number) => {
    const data = {
      latitude: latitude,
      longitude: longitude,
    };

    const res = await fetch("/api/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res_data = await res.json();
    if (res_data.status !== 200) {
      console.log(
        `Received an error response from the server received status: ${res_data.status}`
      );
      return;
    }

    const recommendations: RecommendData[] = res_data.data.recommendations;
    const next_page_token: string | undefined = res_data.data.next_page_token;

    setRecommendPlaces(recommendations);
    setNextToken(next_page_token);
  };

  const onLocationSuccess = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fillUpRecommendations(latitude, longitude);
  };

  const onLocationError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      default:
        console.log("An unknown error occurred.");
        break;
    }
  };

  const requestForMore = async () => {
    const data = {
      latitude: 0,
      longitude: 0,
      token: nextToken,
    };

    const res = await fetch("/api/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res_data = await res.json();
    if (res_data.status !== 200) {
      console.log(
        `Received an error response from the server received status: ${res_data.status}`
      );
      return;
    }

    const recommendations: RecommendData[] = res_data.data.recommendations;
    const next_page_token: string = res_data.data.next_page_token;
    if (recommendPlaces !== null)
      setRecommendPlaces([...recommendPlaces, ...recommendations]);
    setNextToken(next_page_token);
  };

  const handleBtnClick = () => {
    requestForMore();
  };

  if (recommendPlaces === null) {
    return (
      <section className="mt-14">
        <h1>Loading</h1>
      </section>
    );
  } else if (recommendPlaces.length !== 0) {
    return (
      <section className="mt-14 flex flex-col items-center">
        {recommendPlaces.map((recommendPlace: RecommendData) => {
          return (
            <RecommendationBlock
              recommendation={recommendPlace}
              key={recommendPlace.place_id}
            />
          );
        })}
        {nextToken !== undefined && (
          <div className="w-1/2 h-12 flex justify-center items-center mb-6">
            <button
              className="border-2 border-black rounded-xl p-4"
              onClick={handleBtnClick}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    );
  } else {
    return (
      <section className="mt-14">
        <h1>There is no tourist attraction found near you ...</h1>
      </section>
    );
  }
};

const RecommendationBlock = ({
  recommendation,
}: {
  recommendation: RecommendData;
}) => {
  const [imageUrl, setImageUrl] = useState<String>("");

  useEffect(() => {
    setImageUrl(recommendation.photo_buffer_str);
  }, [recommendation]);

  return (
    <div
      className={`${
        imageUrl === "" ? "" : "grid grid-cols-2"
      } mb-8 w-1/2 border-4 border-black rounded-xl p-8`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-xl font-bold flex items-center justify-center">
          {recommendation.place_name}
        </h1>
        <div className="flex justify-center items-center">
          <ReactStars
            count={5}
            value={recommendation.place_rating}
            edit={false}
            size={36}
          />
        </div>
        <h3>
          Out of <strong>{recommendation.rating_amount}</strong> total ratings
        </h3>
      </div>
      {recommendation.photo_buffer_str !== "" && (
        <div>
          <img
            src={`data:${recommendation.photo_type};base64,${imageUrl}`}
            alt="Recommendation Image"
            className="rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Recommendation;
