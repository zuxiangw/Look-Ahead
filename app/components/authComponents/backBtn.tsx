"use client";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      className="absolute text-5xl top-8 left-8"
      onClick={() => router.back()}
    >
      X
    </button>
  );
};

export default BackBtn;
