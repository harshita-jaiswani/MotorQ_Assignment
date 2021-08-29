const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://harshita_jaiswani_:Mongodb123@cluster0.v1ctf.mongodb.net/college";
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const studentRouter = require('./routes/students');
const classesRouter = require('./routes/classes');
const classRouter = require('./routes/class');
const classRou = require('./routes/class-on-map');

app.use('/students', studentRouter);
app.use('/classes', classesRouter);
app.use('/class', classRouter);
app.use('/class-on-map', classRou);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});