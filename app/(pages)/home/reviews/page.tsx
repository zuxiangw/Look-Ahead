import HeaderUnderbar from "@/app/components/headerUnderbar";
import ReviewsManager from "../../../components/placeComponents/ReviewsManager";

const Page = async () => {
  const reviews = await fetchAllReviews();
  return (
    <section className="my-8">
      <h1 className="text-4xl text-center font-bold">Reviews</h1>
      <HeaderUnderbar />
      <ReviewsManager
        reviews={reviews.map((review: any) => {
          return {
            ...review,
            posted_on: new Date(review.posted_on),
          };
        })}
      />
    </section>
  );
};

const fetchAllReviews = async () => {
  const res = await fetch("http://localhost:3000/api/reviews", {
    next: { revalidate: 0 },
  });

  if (res.ok) {
    return (await res.json()).data;
  } else {
    return [];
  }
};

export default Page;
