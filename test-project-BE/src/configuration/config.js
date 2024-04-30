// load environment variables from a .env file into process.env
require("dotenv").config();

// define the PORT constant using the value from the environment variables
const PORT = process.env.PORT;

// define the HEADERS object with various HTTP headers for Amazon requests
const HEADERS = {
  Accept: "application/json, text/javascript, */*; q=0.01",
  Host: "www.amazon.com",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Pragma: "no-cache",
  TE: "Trailers",
  "Upgrade-Insecure-Requests": 1,
};

// export the PORT and HEADERS constants for use in other modules
module.exports = { PORT, HEADERS };
