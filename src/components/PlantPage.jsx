import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

/**
 * PlantPage is the main container component for the plant shop admin view.
 *
 * Responsibilities:
 * - Fetches all plants from the backend on initial render (useEffect)
 * - Holds the master `plants` array in state (single source of truth)
 * - Holds the `searchQuery` string in state for filtering
 * - Passes down handlers to child components so they can update shared state
 */
function PlantPage() {
  // Master list of plants fetched from (and synced with) the backend
  const [plants, setPlants] = useState([]);

  // Controlled value for the search input; used to derive the filtered list
  const [searchQuery, setSearchQuery] = useState("");

  // ── Fetch all plants once when the component first mounts ──────────────────
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to load plants:", err));
  }, []); // empty dependency array → runs once on mount

  // ── Handler: add a newly-created plant to local state ─────────────────────
  // Called by NewPlantForm after a successful POST so the list updates without
  // needing a second fetch.
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // ── Derived state: filter plants by name using the current search query ────
  // String.includes() is case-insensitive after lowercasing both sides.
  // When searchQuery is empty every plant passes the filter, restoring the full list.
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      {/* Form to create a new plant; receives a callback to update parent state */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* Search bar; lifts its input value up to PlantPage via onSearch */}
      <Search onSearch={setSearchQuery} />

      {/* Renders only the plants that match the current search query */}
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
