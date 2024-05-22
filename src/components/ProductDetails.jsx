import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductDetails() {
  const { productId } = useParams(); // Extract productId from URL parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();

    // Clean up function to cancel the fetch request if component unmounts
    return () => {
      // Cancel the fetch request if it's still pending
    };
  }, [productId]); // Fetch product whenever productId changes

  const handleAddToCart = () => {
    // Show the modal when Add to Cart button is clicked
    setShowModal(true);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  if (loading || !product) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
