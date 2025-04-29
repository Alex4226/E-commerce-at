import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

const ProductPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  if (!product.id) return notFound();

  return (
    <>
    <Navbar />
    <div style={{ padding: "2rem" }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
    </>
    
  );
}

export default ProductPage;