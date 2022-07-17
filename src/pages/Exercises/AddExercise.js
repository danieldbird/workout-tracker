import React, { useState } from "react";

export default function AddExercise() {
  const [exercise, setExercise] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(exercise);
  };

  return (
    <div>
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <input
            type="text"
            className="border rounded py-2 px-4"
            placeholder="Exercise Name"
            name="name"
            value={exercise}
            onChange={(e) => {
              setExercise(e.target.value);
            }}
          />
        </div>
        <div className="py-2">
          <select name="category" className="border rounded py-2 px-4" defaultValue="weight">
            <option value="weight">Weight</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>
        <div className="py-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Save Exercise</button>
        </div>
      </form>
    </div>
  );
}
