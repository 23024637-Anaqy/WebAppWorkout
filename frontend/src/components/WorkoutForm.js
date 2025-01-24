import React, { useState, useContext } from "react";  // useContext for context
import { WorkoutContext } from "../context/WorkoutContext.js";

const WorkoutForm = () => {
    const { dispatch } = useContext(WorkoutContext);  // Use useContext hook
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const workout = { title, reps, load };
      const response = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
      } else {
        setTitle("");
        setReps("");
        setLoad("");
        setError(null);
        dispatch({ type: "ADD_WORKOUT", payload: json });
      }
    };
  
    return (
      <form
        className="bg-forgeGray text-white p-6 rounded-lg shadow-md font-castIron"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl mb-4 border-b border-forgeAccent pb-2">Add a New Workout</h3>
        <label className="block mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-forgeAccent text-white focus:outline-none"
        />
        <label className="block mb-2">Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-forgeAccent text-white focus:outline-none"
        />
        <label className="block mb-2">Load (kg):</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-forgeAccent text-white focus:outline-none"
        />
        <button
          className="bg-forgeBlack text-white py-2 px-4 rounded hover:bg-forgeAccent transition"
        >
          Add Workout
        </button>
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </form>
    );
};

export default WorkoutForm;
