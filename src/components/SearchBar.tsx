import "./css/searchBar.css";

interface Props {
  url: string;
  nameProp: string;
}

const SearchBar = ({ url, nameProp }: Props) => {
  return (
    <>
      <form id="search-google" action={url} target="_blank">
        <div>
          <label htmlFor="g-search-bar">Google Search</label>
          <input type="search" name={nameProp} id="g-search-bar" />
          <input type="submit" className="submit-search" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
