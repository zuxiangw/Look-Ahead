import { NextRequest, NextResponse } from "next/server";
import PlaceData from "@/app/interfaces/PlaceData";

export default async function GET(req: NextRequest) {
  const place_id: string | undefined | null =
    req.nextUrl.searchParams.get("place_id");
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

  return NextResponse.json({ status: 200, message: "request success" });
}
