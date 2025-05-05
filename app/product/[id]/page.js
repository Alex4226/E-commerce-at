import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import "@/app/product/[id]/page.css";

const ProductPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  if (!product.id) return notFound();

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p className="category">Category: {product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">{product.price.toFixed(2)}$</p>
            <p className="rating">
              <span className="star">⭐</span> {product.rating.rate} / 5 (
              {product.rating.count} reviews)
            </p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
