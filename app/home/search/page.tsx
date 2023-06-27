import SearchBar from "./searchBar";
const SearchPage = () => {
  return (
    <section className="h-1/3 flex flex-col justify-evenly text-center">
      <h1 className="text-4xl font-bold tracking-wide">Start Looking</h1>
      <SearchBar />
    </section>
  );
};

export default SearchPage;
