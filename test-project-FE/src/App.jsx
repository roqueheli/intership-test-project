import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import "./index.css";

// define the main component of the application.
const App = () => {
  const [products, setProducts] = useState(null);

  // return the structure of the main component.
  return (
    <div className="main-container">
      {/* render the Header component, passing the setProducts function as a prop. */}
      <Header setProducts={setProducts} />
      {/* render the Results component, passing the products as a prop. */}
      <Results products={products} />
    </div>
  );
};

// export the main component to make it available for use in other files.
export default App;
