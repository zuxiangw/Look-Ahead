"use client";
import ReviewsContainer from "@/app/(pages)/home/reviews/ReviewsContainer";
import Review from "@/app/interfaces/Review";
import { useState, useEffect } from "react";

export default function ReviewsManager({ reviews }: { reviews: Review[] }) {
  const [sortCrit, setSortCrit] = useState<string>("latest");
  const [allReviews, setAllReviews] = useState<Review[]>(reviews);

  const setSortLatest = () => {
    setSortCrit("latest");
  };

  const setSortRating = () => {
    setSortCrit("rating");
  };

  useEffect(() => {
    let sortedReviews: Review[] = [...reviews];
    if (sortCrit === "rating") {
      sortedReviews.sort(sortByRating);
    } else {
      sortedReviews.sort(sortByLatest);
    }
    setAllReviews(sortedReviews);
  }, [sortCrit, reviews]);

  return (
    <div className="space-y-8 mx-8">
      <div>
        <h1 className="text-3xl font-bold">Sort By:</h1>
        <div className="w-fit bg-gray-300 border-2 border-black text-2xl mt-2">
          <button
            className="p-2 border-r-2 border-black hover:bg-gray-500 transition-colors"
            onClick={setSortLatest}
          >
            Latest
          </button>
          <button
            className="p-2 border-black hover:bg-gray-500 transition-colors"
            onClick={setSortRating}
          >
            Rating
          </button>
        </div>
      </div>
      <ReviewsContainer reviews={allReviews} />
    </div>
  );
}

const sortByLatest = (a: Review, b: Review) => {
  return b.posted_on.getTime() - a.posted_on.getTime();
};

const sortByRating = (a: Review, b: Review) => {
  return b.review_rating - a.review_rating;
};
