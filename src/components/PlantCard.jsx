import React, { useState } from "react";

/**
 * PlantCard displays a single plant's details and lets the admin toggle
 * its stock status between "In Stock" and "Out of Stock".
 *
 * The `inStock` state is local to this component and is not persisted to the
 * backend – toggling survives re-renders but resets on a full page refresh.
 */
function PlantCard({ plant }) {
  // Track stock status locally; plants start in stock by default
  const [inStock, setInStock] = useState(true);

  // Toggle the stock boolean each time the button is clicked
  function handleStockToggle() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* Conditional rendering: button style and label reflect current stock state */}
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;