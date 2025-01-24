import React from "react";

const WorkoutList = ({ workouts }) => {
  if (!Array.isArray(workouts) || workouts.length === 0) {
    return <p className="text-center">No workouts available</p>;
  }

  return (
    <div>
      {workouts.map((workout) => (
        <div key={workout._id} className="workout-item mb-4">
          <h2 className="text-xl font-bold">{workout.name}</h2>
          <p>Duration: {workout.duration} mins</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
