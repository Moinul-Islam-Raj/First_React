import "./css/searchBar.css";

const SearchBar = () => {
  return (
    <>
      <form id="search-google" action="https://www.google.com/search">
        <div>
          <label htmlFor="g-search-bar">Google Search</label>
          <input type="search" name="q" id="g-search-bar" />
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
