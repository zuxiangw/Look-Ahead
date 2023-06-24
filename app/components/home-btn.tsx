import Link from "next/link";

const HomeBtn = () => {
  return (
    <button className="bg-orange-500">
      <Link href="/home">Home</Link>
    </button>
  );
};

export default HomeBtn;
