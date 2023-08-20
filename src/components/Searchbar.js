import { useState } from "react";

const Searchbar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-4 bg-gray-100">
      <div className="container mx-auto flex">
        <input
          data-testid="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-4 flex-grow rounded bg-white focus:outline-orange-400"
        />
        <button
          data-testid="search-btn"
          className="bg-orange-600 text-white p-4 ml-2 rounded w-24"
          onClick={() => props.onSearch(searchText)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
