import "./css/searchBar.css";

const SearchBar = () => {
  return (
    <>
      <form
        id="search-google"
        action="https://www.google.com/search"
        target="_blank"
      >
        <div>
          <label htmlFor="g-search-bar">Google Search</label>
          <input type="search" name="q" id="g-search-bar" />
          <input type="submit" className="submit-search" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
