import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const photo_url: string | null = req.nextUrl.searchParams.get("url");
  if (photo_url === null) {
    return NextResponse.json({
      status: 510,
      message: "Need to provide a url",
    });
  }

  let photo_res;
  let photoData: Buffer;

  try {
    photo_res = await fetch(`http:${photo_url}`);

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
