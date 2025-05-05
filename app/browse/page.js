'use client';
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "@/components/Navbar/Navbar";
import CardProduct from "@/components/CardProduct/CardProduct";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";


const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShoppingCart, setIsShoppingCart] = useState(true);
  const [shopList, setShopList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const serverResponse = await fetch(`https://fakestoreapi.com/products`);
        const products = await serverResponse.json();
        setData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Navbar isShoppingCart={isShoppingCart} setIsShoppingCart={setIsShoppingCart} />
      <ShoppingCart isShoppingCart={isShoppingCart} setIsShoppingCart={setIsShoppingCart} shopList={shopList} setShopList={setShopList} totalCart={totalCart} setTotalCart={setTotalCart} />
      <div className="product-card-container">
        {data.map((e) => (
          <CardProduct
            key={e.id}
            id={e.id}
            image={e.image}
            title={e.title}
            price={e.price}
            rating={e.rating.rate}
            shopList={shopList}
            setShopList={setShopList}
            totalCart={totalCart} 
            setTotalCart={setTotalCart}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
