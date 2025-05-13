
import "@/app/product/[id]/page.css";
import ProductPageCard from "@/components/ProductPageCard/ProductPageCard";

const ProductPage = async ({ params }) => <ProductPageCard id={ params.id } />

export default ProductPage;
