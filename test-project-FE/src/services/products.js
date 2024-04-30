import $ from "jquery";

const getByKeyword = async (keyword) => {
  // use jQuery's ajax method to make an HTTP GET request.
  // the URL is constructed using an environment variable VITE_PRODS_URL and the provided keyword.
  // set the dataType to "json" to expect JSON data in response.
  // disable caching by setting cache to false.
  // set the HTTP method to GET.
  // define a success callback function which returns the received data.
  return await $.ajax({
    url: `${import.meta.env.VITE_PRODS_URL}${keyword}`,
    dataType: "json",
    cache: false,
    method: "GET",
    success: (data) => {
      return data;
    },
  });
};

// export an object containing the getByKeyword function as its property.
export default { getByKeyword };
