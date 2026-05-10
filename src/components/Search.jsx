import React, { useState } from "react";

/**
 * Search renders a controlled text input that lets the admin filter plants
 * by name in real time.
 *
 * The component owns the raw input value in local state, then lifts the
 * current query up to PlantPage via the `onSearch` callback so the parent
 * can derive the filtered plant list.
 *
 * Clearing the input (empty string) causes PlantPage to show all plants again.
 */
function Search({ onSearch }) {
  // Controlled state for the search input value
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);        // keep local input in sync
    onSearch(value);        // notify PlantPage so it can filter the plant list
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
