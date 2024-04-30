import React from "react";
import "../index.css";

// define the Card component, receiving 'product' as a prop.
const Card = ({ product }) => {
  // render the content of the card.
  return (
    <div className="card-content">
      {/* display the product image */}
      <div className={"image-container"}>
        <img src={product.imageUrl} alt={product.tittle} />
      </div>
      {/* display the product title */}
      <h3>{product.tittle}</h3>
      {/* display the product reviews */}
      <p>{product.reviews}</p>
      {/* display the product rating */}
      <p>{product.rating}</p>
    </div>
  );
};

// export the Card component.
export default Card;
