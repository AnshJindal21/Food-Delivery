const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require("./db");
const cors = require('cors');
mongoDB();

// List of allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Development frontend
  'https://food-delivery-frontend-z9qv.onrender.com', // Production frontend
];

// Configure CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Enable CORS pre-flight for all routes (optional but recommended)
app.options('*', cors());

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', require("./routes/Createuser"));
app.use('/api', require("./routes/OrderData"));
app.use('/api', require("./routes/DisplayData"));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
