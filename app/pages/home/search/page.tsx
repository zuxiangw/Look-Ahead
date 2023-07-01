import SearchBar from "./searchBar";
import Recommendation from "./recommendation";
const SearchPage = () => {
  return (
    <section className="h-fit flex flex-col text-center">
      <section className="bg-search-hero bg-cover h-search-hero">
        <h1 className="mt-14 h-min text-4xl font-bold tracking-wide">
          Start Looking
        </h1>
        <SearchBar />
      </section>
      <h1 className="mt-14 text-4xl font-bold tracking-wide">
        Recommended Places Near You
      </h1>
      <Recommendation />
    </section>
  );
};

export default SearchPage;
