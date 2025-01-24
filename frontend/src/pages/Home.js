import React, { useEffect, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-forgeBlack text-white p-8 font-castIron">
      <div className="container mx-auto">
        <h1 className="text-3xl mb-6 text-center">Forge Your Workouts</h1>
        <WorkoutList workouts={workouts || []} />
        <div className="mt-8">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
