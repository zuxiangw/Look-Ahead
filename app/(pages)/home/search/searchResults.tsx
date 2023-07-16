import React from "react";
import Image from "next/image";
import GoogleLogoImage from "@/app/images/logo/google.png";
import Link from "next/link";
interface Result {
  main_text: string;
  secondary_text: string;
  place_id: string;
}

interface SearchResultsProps {
  results: Result[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden w-fit">
      {results.map((result: Result) => {
        return <SearchResult key={result.place_id} result={result} />;
      })}
      <GoogleLogo />
    </div>
  );
};

interface SearchResultProps {
  result: Result;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <Link
      href={`/home/place/${result.place_id}`}
      className="h-12 px-4 hover:bg-gray-200 flex items-center bg-white"
    >
      <h4>
        {" "}
        <strong>{result.main_text}</strong>
        {", "}
        {result.secondary_text}
      </h4>
    </Link>
  );
};

const GoogleLogo = () => {
  return (
    <div className="h-12 bg-white flex justify-center items-center">
      <div className="flex flex-rows">
        <h1 className="mr-2 font-bold">Powered By</h1>
        <Image src={GoogleLogoImage} alt="Google Logo" height={25} />
      </div>
    </div>
  );
};

export default SearchResults;
