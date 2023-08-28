import HeaderUnderbar from "@/app/components/headerUnderbar";
import ReviewsManager from "../../../components/placeComponents/ReviewsManager";

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
  try {
    const res = await fetch(`https://look-ahead.vercel.app/api/reviews`, {
      next: { revalidate: 0 },
    });
    if (res.ok) {
      const reviews = (await res.json()).data;
      if (reviews)
        return reviews.map((review: any) => {
          return {
            ...review,
            posted_on: new Date(review.posted_on),
          };
        });
      else return [];
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export default Page;
