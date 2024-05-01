import React, { useState } from "react";
import products from '../services/products';

// define the Header component, receiving setProducts as a prop.
const Header = ({ setProducts }) => {
  // Define state variable 'filter' and its setter function using the useState hook.
  const [filter, setFilter] = useState("");
  
  // define a handleChange function to update the 'filter' state based on input changes.
  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  // define a handleSearch function to handle the search action.
  const handleSearch = async (e) => {
    e.preventDefault();
    setProducts(null);
    // call the getByKeyword method from the products service with the filter as parameter.
    // await for the asynchronous call to complete and receive the data.
    const data = await products.getByKeyword(filter);
    // update the products state with the received data.
    setProducts(data);
  };

  // render a form with input field and button for search functionality.
  return (
    <form className={'nav-search'} onSubmit={handleSearch}>
      <input required onChange={handleChange} placeholder='amazon' name="filter" value={filter} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

// export the Header component.
export default Header;
