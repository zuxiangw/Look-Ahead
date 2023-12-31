import { NextRequest, NextResponse } from "next/server";
import PlaceData from "@/app/interfaces/PlaceData";
import { Review } from "@/app/interfaces/PlaceData";

interface PhotoData {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

const GET = async (place_id: string | null) => {
  if (place_id === undefined || place_id === null) {
    return NextResponse.json({
      status: 510,
      message: "place_id was not provided",
    });
  }
  const apiKey = process.env.PLACES_API_KEY;

  let place_res, place_data;
  try {
    const req_url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}`;
    place_res = await fetch(req_url);
    place_data = await place_res.json();
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error encountered while fetching",
    });
  }

  if (place_data.status !== "OK") {
    if (place_data.status === "NOT_FOUND")
      return NextResponse.json({ status: 502, message: "Invalid ID" });
    else return NextResponse.json({ status: 500, message: "API Error" });
  }

  const place_result = place_data.result;
  if (place_result === undefined || place_result === null) {
    return NextResponse.json({ status: 510, message: "No Results found" });
  }

  const place_name: string | undefined = place_result.name ?? undefined;
  const address: string | undefined =
    place_result.formatted_address ?? undefined;
  const phone: string | undefined =
    place_result.formatted_phone_number ?? undefined;
  const website: string | undefined = place_result.website ?? undefined;
  const business_status: string | undefined =
    place_result.business_status ?? undefined;
  const open_now: boolean | undefined =
    place_result.opening_hours === undefined
      ? undefined
      : place_result.opening_hours.open_now ?? undefined;
  const hours: string[] =
    place_result.opening_hours === undefined
      ? ""
      : place_result.opening_hours.weekday_text ?? "";
  const rating: number | undefined = place_result.rating ?? undefined;
  const rating_total: number | undefined =
    place_result.user_ratings_total ?? undefined;
  const photo_references: string[] | undefined =
    place_result.photos === undefined
      ? undefined
      : place_result.photos.map((photo: PhotoData) => {
          return photo.photo_reference;
        });

  let lat: number | undefined, lon: number | undefined;
  try {
    const location = place_result.geometry.location;
    lat = location.lat;
    lon = location.lng;
  } catch (error) {
    lat = undefined;
    lon = undefined;
  }

  const reviews: Review[] | undefined =
    place_result.reviews === undefined
      ? undefined
      : place_result.reviews.map((review: any) => {
          return {
            author_name: review.author_name,
            rating: review.rating,
            relative_time_description: review.relative_time_description,
            text: review.text ?? "",
            profile_url: review.profile_photo_url ?? "",
          };
        });

  const place_response: PlaceData = {
    place_name: place_name,
    address: address,
    phone: phone,
    website: website,
    business_status: business_status,
    open_now: open_now,
    hours: hours,
    rating: rating,
    location: lat && lon ? { lat, lon } : undefined,
    rating_total: rating_total,
    photo_references: photo_references,
    reviews: reviews,
  };

  return NextResponse.json({ status: 200, data: place_response });
};

export { GET as GET_placeDetails };
