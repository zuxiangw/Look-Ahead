"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
const SlideShow = ({ photo_references }: { photo_references: string[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const nextButtonPress = () => {
    setIndex((prevIdx) =>
      prevIdx == photo_references.length - 1 ? 0 : prevIdx + 1
    );
  };

  const prevButtonPress = () => {
    setIndex((prevIdx) =>
      prevIdx == 0 ? photo_references.length - 1 : prevIdx - 1
    );
  };

  useEffect(() => {
    const children_lst = document.querySelectorAll(".gallery_image");
    if (children_lst) {
      for (let i = 0; i < children_lst.length; i++) {
        const xOffset: number = (i - index) * 200;
        const currZIndex: number = children_lst.length - Math.abs(index - i);
        const scale: number = 0.95 ** Math.abs(i - index);
        const opacity: number = 0.95 ** Math.abs(i - index);

        const currElem: HTMLElement = children_lst[i] as HTMLElement;
        currElem.style.transform = `translateX(${xOffset}px) scale(${scale})`;
        currElem.style.zIndex = `${currZIndex}`;
        currElem.style.opacity = `${opacity}`;
      }
    }
  }, [index]);

  const imageClickHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    idx: number
  ) => {
    if (event.detail === 1) {
      setIndex(idx);
    } else {
      setModalIdx(idx);
    }
  };

  const closeModal = () => {
    setModalIdx(null);
  };

  return (
    <div className="h-search-hero w-full mt-8">
      {modalIdx && (
        <div
          className="absolute bg-[rgba(0,0,0,0.4)] h-[2000px] w-full top-20 z-50"
          id="modal-container"
          onClick={closeModal}
        >
          <div className="text-6xl font-bold w-full flex flex-row-reverse">
            <button className="my-8 mr-8 text-gray-300">X</button>
          </div>
          <div className="absolute w-full flex justify-center z-[51]">
            <div className="h-[1200px] w-[1200px] relative">
              <Image
                src={`/api/place/place-photo?photo_reference=${photo_references[modalIdx]}`}
                alt={photo_references[modalIdx]}
                key={photo_references[modalIdx]}
                fill={true}
                className="object-contain modal-images"
              />
            </div>
          </div>
        </div>
      )}
      <div
        className="w-min bg-transparent h-search-hero absolute flex items-center"
        onClick={prevButtonPress}
      >
        <button className="text-6xl font-bold h-min w-min ml-4">{"<"}</button>
      </div>
      <div className="w-[85%] h-search-hero absolute left-[10%] flex flex-row justify-center items-center overflow-hidden">
        {photo_references.map((photo_reference: string, currIndex: number) => {
          return (
            <div
              key={photo_reference}
              className="gallery_image w-[500px] h-search-hero absolute transition-transform duration-500"
              onClick={(event) => imageClickHandler(event, currIndex)}
            >
              <Image
                src={`/api/place/place-photo?photo_reference=${photo_reference}`}
                alt={photo_reference}
                fill={true}
                className={`object-cover ${
                  currIndex === index
                    ? "border-8 border-red-800 rounded-xl"
                    : ""
                }`}
              />
            </div>
          );
        })}
      </div>
      <div
        className="w-min bg-transparent h-search-hero absolute right-0 flex items-center justify-center "
        onClick={nextButtonPress}
      >
        <button className="text-6xl font-bold h-min w-min ml-auto mr-4">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
