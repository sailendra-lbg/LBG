const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require('./routes/user');
const port = process.env.PORT || 5000;

// parse application/json
app.use(bodyParser.json());

app.use('/api/',userRouter);

module.exports.app = app;

app.listen(port, console.log(`server running at port: ${port}`));