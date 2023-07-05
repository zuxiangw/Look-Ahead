"use client";
import { useState } from "react";
import Image from "next/image";

const SlideShow = ({ photo_references }: { photo_references: string[] }) => {
  const [index, setIndex] = useState<number>(0);

  const prevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? photo_references.length - 1 : prevIndex - 1
    );
  };

  const nextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === photo_references.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (photo_references.length === 0) {
    return (
      <section>
        <h1>No Photo Found</h1>
      </section>
    );
  } else if (photo_references.length === 1) {
    return (
      <section>
        <Image
          src={`/api/place-photo?photo_reference=${photo_references[0]}`}
          alt={`Photo`}
          width={500}
          height={500}
        />
      </section>
    );
  } else {
    const prevIndex = index === 0 ? photo_references.length - 1 : index - 1;
    const nextIndex = index === photo_references.length - 1 ? 0 : index + 1;

    return (
      <section className="flex w-full justify-center items-center my-8">
        <button className="text-3xl mx-6" onClick={prevClick}>
          {"<"}
        </button>
        <div className="grid grid-cols-3 h-96 gap-x-4 w-4/5 border-4 border-black rounded-xl p-8">
          <div className="relative">
            <Image
              src={`/api/place-photo?photo_reference=${photo_references[prevIndex]}`}
              alt={`${photo_references[prevIndex]}`}
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={`/api/place-photo?photo_reference=${photo_references[index]}`}
              alt={`${photo_references[index]}`}
              fill={true}
              className=" object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={`/api/place-photo?photo_reference=${photo_references[nextIndex]}`}
              alt={`${photo_references[nextIndex]}`}
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
        <button onClick={nextClick} className="text-3xl  mx-6">
          {">"}
        </button>
      </section>
    );
  }
};

export default SlideShow;
