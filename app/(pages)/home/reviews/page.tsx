import HeaderUnderbar from "@/app/components/headerUnderbar";
import ReviewsManager from "../../../components/placeComponents/ReviewsManager";
import { GET_reviews } from "@/app/utils/routeHandlers/reviews";
import { getAllReviews } from "@/app/utils/database";

const Page = async () => {
  const reviews = await fetchAllReviews();
  return (
    <section className="my-8">
      <h1 className="text-4xl text-center font-bold">Reviews</h1>
      <HeaderUnderbar />
      <ReviewsManager reviews={reviews} />
    </section>
  );
};

const fetchAllReviews = async () => {
  const res = await fetch("https://look-ahead.vercel.app/api/reviews", {
    next: { revalidate: 0 },
  });
  if (res.ok) {
    const reviews = (await res.json()).data;
    return reviews.map((review: any) => {
      return {
        ...review,
        posted_on: new Date(review.posted_on),
      };
    });
  } else {
    return [];
  }
};

export default Page;
