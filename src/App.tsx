import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar
        title="Google Search"
        url="https://www.google.com/search"
        nameProp="q"
      />
      <SearchBar
        title="YT Search"
        url="https://www.youtube.com/results"
        nameProp="search_query"
      />
    </div>
  );
}

export default App;
