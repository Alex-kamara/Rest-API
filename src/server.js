require("./db/connection"); //instantly run database connection
const express = require("express"); //pull in all of express module
const cors = require("cors");
const userRouter = require("./user/routes"); // bring in all endpoints connected to userRouter
const app = express(); //create webserver constant to manipulate
const port = process.env.PORT || 5001; //store either supplied port or 5001

app.use(express.json()); //parses all requests as if they are JSON, sends all responses as JSON

app.use(cors()); //allows requests to be made from other Node applications of any origin
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
//Listening on port 5001 or provided port on current location (localhost)
