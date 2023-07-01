import React from "react";

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
    <div className="grid grid-cols-7">
      {results.map((result: Result) => {
        return <SearchResult key={result.place_id} result={result} />;
      })}
    </div>
  );
};

interface SearchResultProps {
  result: Result;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="h-12 col-start-3 col-end-6 flex justify-center items-center border-2 border-black px-2 bg-white">
      <h4>
        {" "}
        <strong>{result.main_text}</strong>
        {", "}
        {result.secondary_text}
      </h4>
    </div>
  );
};

export default SearchResults;
