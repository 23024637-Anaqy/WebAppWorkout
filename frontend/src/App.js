import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { WorkoutContextProvider } from "./context/WorkoutContext";

function App() {
  return (
    <WorkoutContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </WorkoutContextProvider>
  );
}

export default App;
