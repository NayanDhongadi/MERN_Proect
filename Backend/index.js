const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
require('dotenv').config()


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin",process.env.REACT_APP_FRONTEND_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  )
  next();
});


app.use(express.json());


mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 