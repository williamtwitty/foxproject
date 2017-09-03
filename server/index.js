const express = require('express');
const bodyParser = require('body-parser')

const port = 3002;
const itemManager = require('./controllers/itemManager')

const app = express();

app.use(bodyParser.json());

export default index;