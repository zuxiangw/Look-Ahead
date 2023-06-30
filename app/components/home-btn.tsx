import Link from "next/link";

const HomeBtn = () => {
  return (
    <button className="bg-orange-500">
      <Link href="/pages/home/search">Home</Link>
    </button>
  );
};

export default HomeBtn;
