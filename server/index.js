require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});