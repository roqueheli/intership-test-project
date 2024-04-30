// require the 'express' module for building web applications
const express = require('express');
// require the 'cors' module for enabling Cross-Origin Resource Sharing (CORS)
const cors = require('cors');
// require 'express-async-errors' to handle async errors in Express middleware
require('express-async-errors');

// create an Express application instance.
const app = express();
// import error handling middleware from './middlewares/errorHandler'
const { errorHandler, unknownEndpoint } = require('./middlewares/errorHandler');
// import the products router from './controllers/products'
const productsRouter = require('./controllers/produtcs');

// enable CORS for all routes
app.use(cors());
// app.use(express.static('dist'));

// parse JSON bodies of incoming requests
app.use(express.json());

// mount the productsRouter middleware at the specified path
app.use('/api/scrape', productsRouter);

// middleware to handle unknown endpoints.
app.use(unknownEndpoint);
// middleware to handle errors.
app.use(errorHandler);

// export the Express application instance
module.exports = app;
