"use client";
import { useRef, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

const AuthModal = ({
  children,
  backRouter,
}: {
  children: React.ReactNode;
  backRouter: () => void;
}) => {
  const overlay = useRef(null);
  const router = useRouter();

  const clickOverlay: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      if (router) {
        backRouter();
      }
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black/60 h-full w-full flex justify-center"
      onClick={clickOverlay}
    >
      <div className="h-4/5 w-2/3 top-16 bg-white rounded-b-xl absolute">
        {children}
      </div>
    </div>
  );
};

export default AuthModal;
