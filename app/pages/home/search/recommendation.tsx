"use client";

import { useEffect, useState } from "react";
import RecommendData from "@/app/interfaces/RecommendData";

const Recommendation = () => {
  const [recommendPlaces, setRecommendPlaces] = useState<RecommendData[]>([]);

  useEffect(() => {
    console.log("asdasd");
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

    const recommendations: RecommendData[] = res_data.data;
    console.log(recommendations);
    setRecommendPlaces(recommendations);
    console.log("updating recommended places");
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

  if (recommendPlaces.length !== 0) {
    return (
      <section className="mt-14">
        {recommendPlaces.map((recommendPlace: RecommendData) => {
          return (
            <RecommendationBlock
              recommendation={recommendPlace}
              key={recommendPlace.place_id}
            />
          );
        })}
      </section>
    );
  } else {
    return (
      <section className="mt-14">
        <h1>
          There is no data found or you did not allow the website to have your
          location
        </h1>
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
    <div>
      <h1>{recommendation.place_name}</h1>
      <h3>{recommendation.place_rating}</h3>
      <h3>{recommendation.rating_amount}</h3>
      <img
        src={`data:${recommendation.photo_type};base64,${imageUrl}`}
        alt="Recommendation Image"
      />
    </div>
  );
};

export default Recommendation;
