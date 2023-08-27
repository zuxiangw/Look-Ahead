import PlaceRating from "../placeRating";
import Review from "../../interfaces/Review";
import Link from "next/link";

const ReviewsContainer = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="space-y-8">
      {reviews.map((review: Review) => {
        return (
          <OneReview
            key={review.id}
            id={review.id}
            review_title={review.review_title}
            review_text={review.review_text}
            place_name={review.place_name}
            username={review.username}
            posted_on={review.posted_on}
            place_id={review.place_id}
            review_rating={review.review_rating}
          />
        );
      })}
    </div>
  );
};

const OneReview = ({
  review_title,
  review_text,
  place_name,
  review_rating,
  username,
  posted_on,
  place_id,
}: Review) => {
  return (
    <>
      {/* Desktop Display */}
      <div className="border-4 border-black rounded-xl p-8 sm:grid hidden grid-cols-10">
        <section className="col-start-1 col-end-8">
          <div className="grid grid-cols-10">
            <h1 className="text-4xl font-bold col-start-1 col-end-8 m-auto">
              {review_title}
            </h1>
            <div className="col-start-8 col-end-11 flex justify-center items-center">
              <PlaceRating rating={review_rating} amount={null} size={36} />
            </div>
          </div>
          <p className="text-2xl mt-4">{review_text}</p>
        </section>
        <section className="col-start-8 col-end-11 flex flex-col space-y-3 text-center">
          <Link
            href={`/home/place/${place_id}`}
            className="text-4xl font-bold hover:underline"
          >
            {place_name}
          </Link>
          <h1 className="text-xl">
            Posted by <p className="text-red-500">{username}</p>
          </h1>
          <h1 className="text-xl">
            {" "}
            Posted <p className="text-green-500">{timeAgo(posted_on)}</p>
          </h1>
        </section>
      </div>

      {/* Mobile Display */}
      <div className="border-4 border-black rounded-xl p-8 sm:hidden flex flex-col space-y-8 text-center">
        <Link
          href={`/home/place/${place_id}`}
          className="text-4xl font-bold hover:underline"
        >
          {place_name}
        </Link>
        <h1 className="text-2xl font-bold col-start-1 col-end-8 m-auto">
          {review_title}
        </h1>
        <p className="text-2xl mt-4 break-words">{review_text}</p>
        <section className="flex flex-row justify-evenly">
          <PlaceRating rating={review_rating} amount={null} size={36} />
          <div>
            <h1 className="text-xl">
              Posted by <p className="text-red-500">{username}</p>
            </h1>
            <h1 className="text-xl">
              {" "}
              Posted <p className="text-green-500">{timeAgo(posted_on)}</p>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

function timeAgo(date: Date) {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();

  if (timeDifference < 1000) {
    return "just now";
  } else if (timeDifference < 60000) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} seconds ago`;
  } else if (timeDifference < 3600000) {
    const minutes = Math.floor(timeDifference / 60000);
    return `${minutes} minutes ago`;
  } else if (timeDifference < 86400000) {
    const hours = Math.floor(timeDifference / 3600000);
    return `${hours} hours ago`;
  } else if (timeDifference < 2592000000) {
    const days = Math.floor(timeDifference / 86400000);
    return `${days} days ago`;
  } else if (timeDifference < 31536000000) {
    const months = Math.floor(timeDifference / 2592000000);
    return `${months} months ago`;
  } else {
    const years = Math.floor(timeDifference / 31536000000);
    return `${years} years ago`;
  }
}

export default ReviewsContainer;
