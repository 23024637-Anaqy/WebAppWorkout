import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutContextProvider } from "./context/WorkoutContext";  // import the context provider
import Home from "./pages/Home";

function App() {
  return (
    <WorkoutContextProvider> {/* Wrap your app in the WorkoutContextProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </WorkoutContextProvider>
  );
}

export default App;