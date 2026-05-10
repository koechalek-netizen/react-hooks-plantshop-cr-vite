import React, { useState } from "react";

/**
 * NewPlantForm renders a controlled form that lets the admin add a new plant.
 *
 * Controlled inputs: each input's value is tied to a piece of state so React
 * is always the single source of truth for what's in the form.
 *
 * On submit:
 *  1. POSTs the new plant data to the backend.
 *  2. Passes the returned plant object (with its server-assigned id) up to
 *     PlantPage via the `onAddPlant` prop so the list re-renders immediately.
 *  3. Resets the form fields back to empty strings.
 */
function NewPlantForm({ onAddPlant }) {
  // Controlled state for each form field
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent the browser's default page-reload behaviour

    const plantData = { name, image, price };

    // POST the new plant to the JSON-Server backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((savedPlant) => {
        // Notify PlantPage so it can append the plant to its state array
        onAddPlant(savedPlant);

        // Clear the form after a successful submission
        setName("");
        setImage("");
        setPrice("");
      })
      .catch((err) => console.error("Failed to add plant:", err));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled input – value always reflects state; onChange keeps them in sync */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
