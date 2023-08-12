"use client";
import { useState } from "react";
import ReactStars from "react-stars";
import { toast } from "react-hot-toast";
const WriteNewReview = ({ place_id }: { place_id: string }) => {
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const updateInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !title ||
      !text ||
      title?.length === 0 ||
      text?.length === 0 ||
      rating === 0
    )
      toast.error("Title or text or rating is empty!");
    else if (title.length > 100) {
      toast.error("Please enter less than 100 characters for title!");
    } else if (text.length > 1000) {
      toast.error("Please enter less than 1000 characters for text!");
    } else {
      sendNewReview();
    }
  };

  const sendNewReview = async () => {
    const data = {
      title: title,
      text: text,
      rating: rating,
    };

    const res = await fetch(`/api/reviews?place_id=${place_id}`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      toast.success("Review has been added!");
    } else {
      toast.error(await res.text());
    }
  };

  return (
    <section>
      <form onSubmit={handleReviewSubmit}>
        <h1 className="text-4xl font-bold text-center my-4">
          Write your rating!
        </h1>
        <section className="grid grid-cols-10">
          <div className="col-start-1 col-end-7 mx-4">
            <h1 className="text-4xl font-bold">Title:</h1>
            <p>Please enter at most 100 characters</p>
            <div>
              <input
                type="text"
                onChange={updateInputTitle}
                className="border-black border-2 w-3/4 h-10 px-2"
              />
            </div>
            <p>Current Character Count: {title.length}</p>
          </div>
          <div className="col-start-7 col-end-11">
            <h1 className="text-4xl font-bold">Rating:</h1>
            <p>Please choose between 1 and 5 stars</p>
            <ReactStars
              count={5}
              value={rating}
              half={true}
              onChange={(newRating: number) => handleRatingChange(newRating)}
              size={36}
            />
          </div>
        </section>
        <section className="mt-4 mx-4">
          <h1 className="text-4xl font-bold">Text:</h1>
          <p>Please enter at most 1000 characters</p>
          <textarea
            name="text"
            onChange={updateInputText}
            className="w-full border-2 border-black h-20"
          />
          <div className="flex flex-row">
            <p className="mr-auto">Current Character Count: {text.length}</p>
            <button
              type="submit"
              className="text-xl ml-auto text-white bg-cyan-500 h-12 w-20"
            >
              Submit
            </button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default WriteNewReview;
