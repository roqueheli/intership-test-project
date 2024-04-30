# Amazon Scraper Frontend

This is a simple scraper for fetching product information from Amazon.

## Setup

1. Clone the repository:

git clone https://github.com/roqueheli/intership-test-project.git

2. Install dependencies:

cd test-project-FE
npm install

3. Create a `.env` file in the root directory and add your environment variables:

VITE_PRODS_URL=http://localhost:3005/api/scrape/?keyword=

## Usage

To start the server, run:
npm run dev

The server will start at http://localhost:5174/ by default.

## Features

- Search for products on Amazon using keywords.
- Display product information such as title, rating, reviews, and image.
- Pagination for browsing multiple pages of search results.

## Technologies Used

- React.js
- Axios for HTTP requests
- CSS for styling

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
