const express = require('express');
const app = express();
const route = require('./Routers/index')
const db = require("./config/db/index")
const testController = require("./app/Controllers/test.controller")
//connect db
db.connect
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
const port = 3000
// const env.port || 3000
//Route
app.post("/add-data", testController.addData)
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});