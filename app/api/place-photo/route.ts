import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const photo_reference: string | null =
    req.nextUrl.searchParams.get("photo_reference");
  if (photo_reference === null) {
    return NextResponse.json({
      status: 510,
      message: "Need to provide a reference, width and height of the photo",
    });
  }

  const apiKey = process.env.PLACES_API_KEY;

  let photo_res;
  let photoData: Buffer;

  try {
    photo_res = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photo_reference}&key=${apiKey}&maxwidth=800`
    );

    if (!photo_res.ok) {
      throw new Error(`Failed to fetch photo: ${photo_res.status}`);
    }

    photoData = Buffer.from(await photo_res.arrayBuffer());
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "The images requested is not abled to be fetched",
    });
  }

  return new NextResponse(photoData, {
    headers: {
      "Content-Type": photo_res.headers.get("Content-Type") || "image/jpeg",
    },
  });
}
