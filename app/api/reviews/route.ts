import { NextRequest, NextResponse } from "next/server";
import { GET_reviews, POST_reviews } from "@/app/utils/routeHandlers/reviews";
export async function GET(req: NextRequest) {
  const place_id = req.nextUrl.searchParams.get("place_id");
  const res = await GET_reviews(place_id);
  return res;
}

export async function POST(req: NextRequest) {
  const place_id = req.nextUrl.searchParams.get("place_id");
  const res = await POST_reviews(req, place_id);
  return res;
}
