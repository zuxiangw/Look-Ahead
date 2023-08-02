import { NextRequest, NextResponse } from "next/server";
import AutoData from "@/app/interfaces/AutoData";
export async function GET(req: NextRequest) {
  const userInput: string | null = req.nextUrl.searchParams.get("text");
  if (userInput === null || userInput.length === 0)
    return NextResponse.json({
      status: 400,
      message: "auto-complete request without text query",
    });
  const apiKey = process.env.PLACES_API_KEY;

  const req_url: string = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    userInput
  )}&key=${apiKey}`;

  const res = await fetch(req_url);
  const data = await res.json();

  if (data.status !== "OK") {
    return NextResponse.json({
      status: 400,
      message: "autocomplete data fetching error",
    });
  }

  const predicts = data.predictions;
  if (predicts.length == 0) return NextResponse.json({ status: 200, data: [] });
  else {
    const placesArray: AutoData[] = new Array(predicts.length);
    const length: number = predicts.length > 5 ? 5 : predicts.length;
    for (let i = 0; i < length; i++) {
      const match = predicts[i];
      const place: AutoData = {
        main_text: match.structured_formatting.main_text,
        secondary_text: match.structured_formatting.secondary_text,
        place_id: match.place_id,
      };
      placesArray[i] = place;
    }
    return NextResponse.json({ status: 200, data: placesArray });
  }
}
