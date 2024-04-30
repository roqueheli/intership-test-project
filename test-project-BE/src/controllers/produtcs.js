// load environment variables from a .env file into process.env.
require("dotenv").config();
// require the axios library for making HTTP requests
const axios = require("axios");
// require the Router module from Express for creating router instances
const productsRouter = require("express").Router();
// require the JSDOM module for parsing HTML and manipulating the DOM
const { JSDOM } = require("jsdom");
// require the configuration file to set headers
const config = require("../configuration/config");

// define a route to get products by keyword
productsRouter.get("/", async (rq, rs) => {
  // make an HTTP GET request to the specified URL with the keyword from the query parameter
  const { data: html } = await axios.get(
    `${process.env.BASE_URL}s?k=${rq.query.keyword}&ref=nb_sb_noss`,
    {
      headers: config.HEADERS,
    }
  );

  // create a new JSDOM instance with the HTML data
  const dom = new JSDOM(html);
  // define a function to select elements in the DOM using the provided selector
  const $ = (selector) => dom.window.document.querySelector(selector);
  // initialize an empty array to store products
  const products = [];

  // select the list of search results
  const resultsList = $(".s-result-list");
  // select all individual search result elements
  const resultsElements = resultsList.querySelectorAll(".s-result-item");

  for (let element of resultsElements) {
    // check if all necessary elements for product information are present
    if (element.querySelector(".a-link-normal .a-size-base-plus") !== null &&
      element.querySelector(".a-icon .a-icon-alt") !== null &&
      element.querySelector(".a-link-normal .a-size-base") !== null) {
      // if all necessary elements are present, extract product information and add to the products array
      const product = {
        id: element.getAttribute("data-asin"),
        tittle: element.querySelector(".a-link-normal .a-size-base-plus").textContent.trim(),
        rating: element.querySelector(".a-icon .a-icon-alt").textContent,
        reviews: element.querySelector(".a-link-normal .a-size-base").textContent,
        imageUrl: element.querySelector(".a-section .s-image").src,
      };

      products.push(product);
    }
  }

  // respond with the array of products
  return rs.status(200).json(products);
});

// export the productsRouter
module.exports = productsRouter;
