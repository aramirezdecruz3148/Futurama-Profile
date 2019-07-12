const express = require('express');
const app = express();
const futuramaRoutes = require('./routes/futurama');

app.use(express.json());

app.use(futuramaRoutes);

module.exports = app;