"use client";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import "@/app/product/[id]/page.css";
import { useShopContext } from "@/app/context/ShopContext";
import { useEffect, useState } from "react";

const ProductPageCard = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { shopList, setShopList, totalCart, setTotalCart } = useShopContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        setProductData(product);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!productData.id) return notFound();


  const addToShoppingCart = (id, image, title, price) => {
    const newItem = {
      id: id,
      image: image,
      title: title,
      price: price,
      quantity: 1,
    };
    const itemIndex = shopList.findIndex((element) => element.id === id);
    if (itemIndex === -1) setShopList([...shopList, newItem]);
    else
      setShopList((prevShopList) =>
        prevShopList.map((e) =>
          e.id === id ? { ...e, quantity: e.quantity++ } : e
        )
      );
    setTotalCart(totalCart + newItem.price);
  };

  return (
    <>
      <Navbar />
      <ShoppingCart />
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <img src={productData.image} alt={productData.title} />
          </div>
          <div className="product-info">
            <h2>{productData.title}</h2>
            <p className="category">Category: {productData.category}</p>
            <p className="description">{productData.description}</p>
            <p className="price">{productData.price.toFixed(2)}$</p>
            <p className="rating">
              <span className="star">⭐</span> {productData.rating.rate} / 5 (
              {productData.rating.count} reviews)
            </p>
            <button
              onClick={() =>
                addToShoppingCart(
                  productData.id,
                  productData.image,
                  productData.title,
                  productData.price
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageCard;
