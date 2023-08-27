import { Review } from "@/app/interfaces/PlaceData";
import HeaderUnderbar from "../headerUnderbar";
import PlaceRating from "../placeRating";
import ReviewsManager from "./ReviewsManager";
import WriteNewReview from "./WriteNewReview";
const PlaceReviewsContainer = async ({
  google_reviews,
  place_id,
}: {
  google_reviews: Review[];
  place_id: string;
}) => {
  const reviews = await fetchPlaceReviews(place_id);
  return (
    <section className="my-8">
      <h1 className="text-4xl font-bold text-center">Reviews</h1>
      <HeaderUnderbar />
      <WriteNewReview place_id={place_id} />
      <section className="mt-8">
        {reviews && reviews.length !== 0 && (
          <ReviewsManager
            reviews={reviews.map((review: any) => {
              return {
                ...review,
                posted_on: new Date(review.posted_on),
              };
            })}
          />
        )}
        <h1 className="text-4xl text-center mt-8">Google Reviews</h1>
        <HeaderUnderbar />
        <GoogleReviewsContainer reviews={google_reviews} />
      </section>
    </section>
  );
};

const fetchPlaceReviews = async (place_id: string) => {
  const res = await fetch(
    `http://localhost:3000/api/reviews?place_id=${place_id}`,
    { method: "GET", next: { revalidate: 0 } }
  );

  if (res.ok) return (await res.json()).data;
  else {
    console.log(await res.text());
    return null;
  }
};

const GoogleReviewsContainer = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="sm:grid flex flex-col grid-cols-2 gap-4 mt-4 mx-4 text-2xl">
      {reviews.map((review: Review, idx: number) => {
        return <GoogleReview key={idx} review={review} />;
      })}
    </div>
  );
};

const GoogleReview = ({ review }: { review: Review }) => {
  return (
    <>
      {/* Desktop Display */}
      <div className="sm:grid hidden border-2 border-black rounded-xl grid-cols-10">
        <section className="col-start-1 col-end-8 p-8 border-r-2 border-black">
          <p>{review.text}</p>
        </section>
        <section className="flex flex-col justify-evenly col-start-8 col-end-11 text-center ">
          <h1>
            Posted by <p className="text-red-500">{review.author_name}</p>
          </h1>
          <h1>
            Posted{" "}
            <p className="text-green-500">{review.relative_time_description}</p>
          </h1>
          <PlaceRating rating={review.rating} amount={null} size={36} />
        </section>
      </div>
      {/* Mobile Display */}
      <div className="border-2 border-black rounded-xl sm:hidden flex flex-col">
        <section className="border-b-2 border-black">
          <p className="p-8">{review.text}</p>
        </section>
        <section className="flex flex-row justify-evenly col-start-8 col-end-11 text-center p-4">
          <h1>
            Posted by <p className="text-red-500">{review.author_name}</p>
          </h1>
          <h1>
            Posted{" "}
            <p className="text-green-500">{review.relative_time_description}</p>
          </h1>
          <PlaceRating rating={review.rating} amount={null} size={36} />
        </section>
      </div>
    </>
  );
};

export default PlaceReviewsContainer;
