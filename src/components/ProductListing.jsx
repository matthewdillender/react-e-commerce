// ProductListing.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products.json");
        console.log(response.data); // Log the fetched data
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
