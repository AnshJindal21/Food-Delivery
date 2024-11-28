const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
/*above is very imp*/
app.use('/api',require("./routes/Createuser"))
/*endpoint will be localhost:5000/api/createuser*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})