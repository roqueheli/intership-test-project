import React from "react";
import Card from "./Card";

// define the Results component, receiving 'products' as a prop.
const Results = ({ products }) => {
  // render a container for displaying cards of products.
  return (
    <div className="cards-container">
      {/* use the map method to iterate over each product in the 'products' array.
          render a Card component for each product, passing the product data as a prop. */}
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

// export the Results component.
export default Results;
