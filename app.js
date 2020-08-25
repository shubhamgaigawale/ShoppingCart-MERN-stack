const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');

require('dotenv').config();

//const mongodburl = config.MONGODB_URL

//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    () => {
        console.log("DATABASE CONNECTED");
});

//middelwares 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes);


//port 
const port = process.env.PORT;

//starting service
app.listen(port, () => {
    console.log(`App is running at ${port}`);
})