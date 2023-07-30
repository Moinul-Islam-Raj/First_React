const SearchBar = () => {
  return (
    <>
      <form action="https://www.google.com/search">
        <label htmlFor="g-search-bar">Google Search</label>
        <input type="search" name="q" id="g-search-bar" />
        <input type="submit" />
      </form>
    </>
  );
};

export default SearchBar;
