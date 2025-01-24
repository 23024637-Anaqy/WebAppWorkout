import React, { useContext } from 'react';  // useContext for context
import { WorkoutContext } from "../context/WorkoutContext.js";

const WorkoutItem = ({ workout }) => {
  const { dispatch } = useContext(WorkoutContext);  // Use useContext hook

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, { method: "DELETE" });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: workout._id });
    }
  };

  return (
    <div className="bg-forgeAccent text-white p-4 rounded-lg shadow-md font-castIron mb-4">
      <h4 className="text-xl mb-2">{workout.title}</h4>
      <p>Reps: {workout.reps}</p>
      <p>Load: {workout.load} kg</p>
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-600 py-2 px-4 rounded text-white hover:bg-red-500 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default WorkoutItem;
