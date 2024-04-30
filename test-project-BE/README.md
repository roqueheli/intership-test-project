# Amazon Scraper Backend

This is a simple scraper for fetching product information from Amazon.

## Setup

1. Clone the repository:

git clone https://github.com/roqueheli/intership-test-project.git

2. Install dependencies:

cd test-project-BE
npm install

3. Create a `.env` file in the root directory and add your environment variables:

BASE_URL=https://www.amazon.com/
PORT=3005

## Usage

To start the server, run:
npm run dev

The server will start at http://localhost:3005 by default. You can change the port in the `.env` file.

## API Endpoints

### Get Products by Keyword

GET /api/scrape?keyword={keyword}

Replace `{keyword}` with the desired product search term.

Example:

GET /api/scrape?keyword=laptop

This will return product information for laptops from Amazon.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

