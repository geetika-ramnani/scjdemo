require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const handleError = require('./middlewares/handleError');
const session = require('express-session');
const passport = require('./config/passport');

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use('/api/users', userRoutes);

app.use(session({ secret: process.env.SESSION_SECRET || 'your_secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Health check endpoint
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong', status: 'ok' });
});

app.use(handleError);

const PORT = process.env.PORT || 5000;
db.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); 