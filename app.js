require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;
const mongoURI = process.env.mongoURI || 'mongodb://localhost:27017/CustomerDB';

mongoose
  .connect(mongoURI)
  .then((res) => console.log(`Connection Succesful ${res}`))
  .catch((err) => console.log(`Error in DB connection ${err}`));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log(`Listening server localhost:${port}`));
