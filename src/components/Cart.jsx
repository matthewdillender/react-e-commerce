import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cartedProducts, setCartedProducts] = useState([]);

  // Function to fetch carted products from the server
  const fetchCartedProducts = async () => {
    try {
      const response = await axios.get("/current_cart");
      setCartedProducts(response.data);
    } catch (error) {
      console.error("Error fetching carted products:", error);
    }
  };

  // Function to remove a carted product from the cart
  const removeFromCart = async (cartedProductId) => {
    try {
      await axios.delete(`/cart/${cartedProductId}`);
      // After successful deletion, fetch updated carted products
      fetchCartedProducts();
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  // useEffect hook to fetch carted products when component mounts
  useEffect(() => {
    fetchCartedProducts();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cartedProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartedProducts.map((cartedProduct) => (
            <li key={cartedProduct.id}>
              <p>Product: {cartedProduct.product.name}</p>
              <p>Quantity: {cartedProduct.quantity}</p>
              <p>Price: ${cartedProduct.price_at_purchase}</p>
              <button onClick={() => removeFromCart(cartedProduct.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
