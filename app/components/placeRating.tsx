"use client";
// @ts-ignore
import ReactStars from "react-stars";
const PlaceRating = ({
  rating,
  amount,
}: {
  rating: number;
  amount: number;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ReactStars count={5} value={rating} edit={false} size={36} />
      <h3>
        Out of <strong>{amount}</strong> total ratings
      </h3>
    </div>
  );
};

export default PlaceRating;
