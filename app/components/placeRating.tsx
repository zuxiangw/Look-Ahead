"use client";
import ReactStars from "react-stars";
const PlaceRating = ({
  rating,
  amount,
  size,
}: {
  rating: number;
  amount: number | null;
  size: number;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ReactStars count={5} value={rating} edit={false} size={size} />
      {amount !== null && (
        <h3>
          Out of <strong>{amount}</strong> total ratings
        </h3>
      )}
    </div>
  );
};

export default PlaceRating;
