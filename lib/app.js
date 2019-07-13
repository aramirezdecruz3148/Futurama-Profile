const express = require('express');
const app = express();
const futuramaRoutes = require('./routes/futurama');
const futuramaQuotes = require('../lib/middleware/futuramaQuotes');

app.use(express.json());

app.use(futuramaRoutes);

module.exports = app;