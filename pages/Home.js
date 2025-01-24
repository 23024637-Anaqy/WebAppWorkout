import React, { useEffect } from "react";
import { useWorkoutContext } from "./backend/context/useWorkoutContext";
import WorkoutList from "./backend/components/WorkoutList";
import WorkoutForm from "./backend/components/WorkoutForm";

const Home = () => {
    const { workouts, dispatch } = useWorkoutContext();
  
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
          <WorkoutList workouts={workouts} />
          <div className="mt-8">
            <WorkoutForm />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;