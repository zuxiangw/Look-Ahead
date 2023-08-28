import { NextRequest, NextResponse } from "next/server";
import { GET_weather } from "@/app/utils/routeHandlers/weather";
export async function GET(req: NextRequest) {
  const lat: string | null = req.nextUrl.searchParams.get("lat");
  const lon: string | null = req.nextUrl.searchParams.get("lon");

  const res = await GET_weather(lat, lon);

  return res;
}
