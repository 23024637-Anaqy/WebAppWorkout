const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Example API route for workouts
app.get('/api/workouts', (req, res) => {
  // This would fetch workouts from your database in a real app
  res.json({ message: 'This is the workouts endpoint' });
});

// Example POST route for creating a workout
app.post('/api/workouts', (req, res) => {
  const newWorkout = req.body; // Assuming the workout data comes in the request body
  res.status(201).json({
    message: 'Workout created',
    data: newWorkout,
  });
});

// Serve static files (for frontend, e.g., React app) in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  // Catch-all route to send back the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});