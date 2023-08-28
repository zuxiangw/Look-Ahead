import {
  addReview,
  getAllReviews,
  getReviewsByPlaceId,
  searchUserByEmail,
  searchUserById,
} from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { Review, User } from "@/app/interfaces/Database";
import { getServerSession } from "next-auth";

const GET = async (place_id: string | null) => {
  let reviews: Review[];
  if (!place_id) {
    try {
      reviews = await getAllReviews();
    } catch (error) {
      return new NextResponse("Error occured fetching all reviews", {
        status: 400,
      });
    }
  } else {
    try {
      reviews = await getReviewsByPlaceId(place_id);
    } catch (error) {
      return new NextResponse(
        `Error occured fetching reviews for ${place_id}: \n${(
          error as Error
        ).toString()}`,
        {
          status: 400,
        }
      );
    }
  }

  const promises = reviews.map(async (review: Review) => {
    const user = (await searchUserById(review.user_id))[0];
    return {
      ...review,
      username: user.username,
    };
  });

  const named_reviews = await Promise.all(promises);

  return new NextResponse(JSON.stringify({ status: 200, data: named_reviews }));
};

const POST = async (req: NextRequest, place_id: string | null) => {
  if (!place_id) {
    return new NextResponse("Place Id not provided!", { status: 400 });
  }

  const session = await getServerSession();
  if (!session) {
    return new NextResponse("You must be logged in!", { status: 401 });
  }

  if (session.user?.email === null || session.user?.email === undefined)
    return new NextResponse("Session email error", { status: 500 });

  const data = await req.json();

  const title: string | null = data.title;
  const text: string | null = data.text;
  const rating: number | null = data.rating;

  if (!title || title.length === 0)
    return new NextResponse("You need to provide a title", { status: 400 });
  if (!text || text.length === 0)
    return new NextResponse("You need to provide review text", { status: 400 });
  if (!rating || rating < 1 || rating > 5)
    return new NextResponse(
      "The rating provided needs to be betrween 1 and 5 inclusive"
    );

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
      return NextResponse.json({
        status: 502,
        message: "Place ID provided was invalid",
      });
    else return NextResponse.json({ status: 500, message: "API Error" });
  }

  const place_result = place_data.result;
  if (place_result === undefined || place_result === null) {
    return NextResponse.json({ status: 510, message: "No Results found" });
  }

  const place_name: string = place_result.name ?? "";

  const ret_query = await searchUserByEmail(session.user?.email);

  if (ret_query.length === 0)
    return new NextResponse("User not found in database", { status: 500 });

  const user = ret_query[0];

  const user_id = user.id;

  try {
    await addReview(user_id, place_id, place_name, title, text, rating);
  } catch (e) {
    throw new Error((e as Error).toString());
  }

  return new NextResponse("Success", { status: 200 });
};

export { GET as GET_reviews, POST as POST_reviews };
// const GET_reviews = async (place_id: string) => {
//   let reviews: Review[];
//   if (!place_id) {
//     try {
//       reviews = await getAllReviews();
//     } catch (error) {
//       const res: RouterHandlerResults = {
//         status: 400,
//         message: "Error occured fetching all reviews",
//         data: null,
//       };
//       return res;
//     }
//   } else {
//     try {
//       reviews = await getReviewsByPlaceId(place_id);
//     } catch (error) {
//       const res: RouterHandlerResults = {
//         status: 400,
//         message: `Error occured fetching reviews for ${place_id}: \n${(
//           error as Error
//         ).toString()}`,
//         data: null,
//       };
//       return res;
//     }
//   }

//   const promises = reviews.map(async (review: Review) => {
//     const user = (await searchUserById(review.user_id))[0];
//     return {
//       ...review,
//       username: user.username,
//     };
//   });

//   const named_reviews = await Promise.all(promises);

//   const res: RouterHandlerResults = {
//     status: 200,
//     data: named_reviews,
//     message: "Success",
//   };

//   return res;
// };
