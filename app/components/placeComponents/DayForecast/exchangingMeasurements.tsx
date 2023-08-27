"use client";

import { useState } from "react";

const ExchangingMeasurements = ({
  m1_val,
  m2_val,
  m1_text,
  m2_text,
  description,
  isTemp,
}: {
  m1_val: number;
  m2_val: number;
  m1_text: string;
  m2_text: string;
  description: string;
  isTemp: boolean;
}) => {
  const [isMeasurement1, setIsMeasurement1] = useState<boolean>(true);

  const revertState = () => {
    setIsMeasurement1((isMeasurement1) => !isMeasurement1);
  };

  return (
    <div className="text-2xl grid grid-cols-10 px-4">
      <div className="col-start-2 col-end-6 flex justify-center mr-auto">
        <h1 className="mr-2">{`${description}: `}</h1>
      </div>
      <div className="col-start-7 col-end-8">
        {isMeasurement1 && (
          <div className="font-bold">
            {m1_val}
            {isTemp && (
              <sup>
                <sup>o</sup>
                {m1_text}
              </sup>
            )}
            {!isTemp && <div className="inline">{m1_text}</div>}
          </div>
        )}
        {!isMeasurement1 && (
          <div className="font-bold">
            {m2_val}
            {isTemp && (
              <sup>
                <sup>o</sup>
                {m2_text}
              </sup>
            )}
            {!isTemp && <div className="inline">{m2_text}</div>}
          </div>
        )}
      </div>
      <button
        onClick={revertState}
        className="border-2 border-black rounded-full bg-white hover:bg-yellow-300 transition-colors col-start-10"
      >
        {isMeasurement1 && <p>{m2_text.charAt(0)}</p>}
        {!isMeasurement1 && <p>{m1_text.charAt(0)}</p>}
      </button>
    </div>
  );
};

export default ExchangingMeasurements;
