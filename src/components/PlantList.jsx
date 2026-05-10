import React from "react";
import PlantCard from "./PlantCard";

/**
 * PlantList receives the (already-filtered) array of plants from PlantPage
 * and maps each one to a PlantCard component.
 *
 * This component is intentionally "dumb" – it has no state of its own and
 * simply renders whatever it receives via props.
 */
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        // key prop helps React efficiently reconcile list re-renders
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
