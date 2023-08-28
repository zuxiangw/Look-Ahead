import { NextRequest, NextResponse } from "next/server";
import PlaceData from "@/app/interfaces/PlaceData";
import { Review } from "@/app/interfaces/PlaceData";
import { GET_placeDetails } from "@/app/utils/routeHandlers/placeDetails";
export async function GET(req: NextRequest) {
  const place_id: string | undefined | null =
    req.nextUrl.searchParams.get("place_id");

  const res = await GET_placeDetails(place_id);

  return res;
}
