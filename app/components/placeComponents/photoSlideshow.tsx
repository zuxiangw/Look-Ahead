"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderUnderbar from "../headerUnderbar";
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

  const handleModalClose = () => {
    const modal_div = document.getElementById("modal_div");
    if (modal_div !== null) {
      modal_div.style.display = "none";
    }
    const prev_div = document.getElementById("modal_prev");
    if (prev_div !== null) {
      prev_div.style.display = "none";
    }
    const mid_div = document.getElementById("modal_mid");
    if (mid_div !== null) {
      mid_div.style.display = "none";
    }
    const next_div = document.getElementById("modal_next");
    if (next_div !== null) {
      next_div.style.display = "none";
    }
  };

  const openPrevModal = () => {
    const modal_div = document.getElementById("modal_div");
    if (modal_div !== null) {
      modal_div.style.display = "block";
    }
    const prev_div = document.getElementById("modal_prev");
    if (prev_div !== null) {
      prev_div.style.display = "block";
    }
  };

  const openMidModal = () => {
    const modal_div = document.getElementById("modal_div");
    if (modal_div !== null) {
      modal_div.style.display = "block";
    }
    const mid_div = document.getElementById("modal_mid");
    if (mid_div !== null) {
      mid_div.style.display = "block";
    }
  };

  const openNextModal = () => {
    const modal_div = document.getElementById("modal_div");
    if (modal_div !== null) {
      modal_div.style.display = "block";
    }
    const next_div = document.getElementById("modal_next");
    if (next_div !== null) {
      next_div.style.display = "block";
    }
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
      <section className="mt-16 text-center">
        <div
          className="absolute bg-[rgba(0,0,0,0.4)] h-[2000px] w-full z-10 top-20 hidden"
          id="modal_div"
        >
          <div className="h-15 w-full flex justify-end pr-10 pt-10">
            <button
              className="font-bold text-6xl text-gray-300"
              onClick={handleModalClose}
            >
              X
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="relative w-[720px] h-[1280px] hidden"
              id="modal_prev"
            >
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[prevIndex]}`}
                alt={`${photo_references[index]}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div
              className="relative w-[720px] h-[1280px] hidden"
              id="modal_mid"
            >
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[index]}`}
                alt={`${photo_references[index]}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div
              className="relative w-[720px] h-[1280px] hidden"
              id="modal_next"
            >
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[nextIndex]}`}
                alt={`${photo_references[index]}`}
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold">Gallery</h1>
        <HeaderUnderbar />
        <div className="flex w-full justify-center items-center">
          <button
            className="text-5xl mx-6 hover:-translate-y-2 transition-transform"
            onClick={prevClick}
          >
            {"<"}
          </button>
          <div className="grid grid-cols-3 gap-x-1 h-search-hero w-4/5 p-8">
            <div
              className="relative w-4/5 h-4/5 my-auto ml-auto"
              id={"left_pic"}
              onClick={openPrevModal}
            >
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[prevIndex]}`}
                alt={`${photo_references[prevIndex]}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="relative" id={"mid_pic"} onClick={openMidModal}>
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[index]}`}
                alt={`${photo_references[index]}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div
              className="relative w-4/5 h-4/5 my-auto mr-auto"
              id={"right_pic"}
              onClick={openNextModal}
            >
              <Image
                src={`/api/place-photo?photo_reference=${photo_references[nextIndex]}`}
                alt={`${photo_references[nextIndex]}`}
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <button
            onClick={nextClick}
            className="text-5xl  mx-6 hover:-translate-y-2 transition-transform"
          >
            {">"}
          </button>
        </div>
      </section>
    );
  }
};

const PhotoModal = () => {};

export default SlideShow;
