const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoDB=require("./db")
const cors = require('cors');
mongoDB();

app.use(cors({
  origin: 'https://food-delivery-frontend-z9qv.onrender.com', // Allow only your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Include credentials if needed
}));
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://food-delivery-frontend-z9qv.onrender.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

/*app .use waale daalne hi hai*/
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  )
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
/*above is very imp*/
app.use('/api',require("./routes/Createuser"))
app.use('/api',require("./routes/OrderData"))
app.use('/api',require("./routes/DisplayData"))

/*endpoint will be localhost:5000/api/createuser*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})