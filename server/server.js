// Environmental variables
require("dotenv").config();

const { dbConnect } = require("./config/connect");
dbConnect();

const express = require("express");
const app = express();

const errHandler = require('./middleware/errHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/auth'));

app.use(errHandler)

// Server Runner
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})