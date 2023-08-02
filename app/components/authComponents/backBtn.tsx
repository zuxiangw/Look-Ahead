"use client";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      className="absolute text-5xl top-16 left-16"
      onClick={() => router.back()}
    >
      X
    </button>
  );
};

export default BackBtn;
