import { NextRequest, NextResponse } from "next/server";
import RecommendData from "@/app/interfaces/RecommendData";

export async function POST(req: NextRequest) {
  const inp_data = await req.json();
  const latitude: number = inp_data.latitude;
  const longitude: number = inp_data.longitude;
  const location = `${latitude}%2C${longitude}`;
  const apiKey = process.env.PLACES_API_KEY;
  const token: string | undefined = inp_data.token;
  const attractions_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=50000&type=tourist_attraction&key=${apiKey}${
    token === undefined ? "" : `&pagetoken=${token}`
  }`;
  const attractions_res = await fetch(attractions_url);
  const attractions_data = await attractions_res.json();

  if (attractions_data.status !== "OK") {
    return NextResponse.json({
      status: 400,
      message: "an error has occurred while fetching nearby data",
    });
  }

  const attraction_results = attractions_data.results;

  const next_page_token: string | undefined = attractions_data.next_page_token;

  const data_promises: Promise<RecommendData>[] = attraction_results.map(
    async (recommendation: any) => {
      const place_name: string = recommendation.name;
      const place_rating: number = recommendation.rating;
      const rating_amount: number = recommendation.user_ratings_total;
      const place_id: string = recommendation.place_id;

      if (recommendation.photos === undefined) {
        const recommendObject: RecommendData = {
          place_id: place_id,
          place_name: place_name,
          place_rating: place_rating,
          rating_amount: rating_amount,
          photo_reference: "",
        };
        return recommendObject;
      }

      const photo_reference: string = recommendation.photos[0].photo_reference;

      const recommendObject: RecommendData = {
        place_id: place_id,
        place_name: place_name,
        place_rating: place_rating,
        rating_amount: rating_amount,
        photo_reference: photo_reference,
      };

      return recommendObject;
    }
  );

  const recommendations: RecommendData[] = await Promise.all(data_promises);
  return NextResponse.json({
    status: 200,
    data: {
      recommendations: recommendations,
      next_page_token: next_page_token,
    },
  });
}
