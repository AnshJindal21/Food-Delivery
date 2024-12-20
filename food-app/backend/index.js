const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
mongoDB();
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