// server.js - Backend Entry Point
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // or true if you prefer
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

// Ensure MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in the .env file');
  process.exit(1);
}

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));