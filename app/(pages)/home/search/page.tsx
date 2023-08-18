import SearchBar from "./searchBar";
import Recommendation from "./recommendation";
import HeaderUnderbar from "@/app/components/headerUnderbar";
const SearchPage = () => {
  return (
    <section className="h-fit flex flex-col text-center">
      <section className="bg-search-hero bg-cover h-search-hero">
        <h1 className="mt-14 h-min text-4xl font-normal tracking-wide text-white font-mono">
          Start Looking
        </h1>
        <SearchBar />
      </section>
      <h1 className="mt-14 text-4xl font-bold tracking-wide">
        Recommended Places Near You
      </h1>
      <HeaderUnderbar />
      <Recommendation />
    </section>
  );
};

export default SearchPage;
