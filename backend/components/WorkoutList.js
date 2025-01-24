import React from "react";
import WorkoutItem from "./WorkoutItem";

const WorkoutList = ({ workouts }) => {
    return (
      <div className="space-y-4">
        {workouts && workouts.map((workout) => <WorkoutItem key={workout._id} workout={workout} />)}
      </div>
    );
  };
  
  export default WorkoutList;