"use client";
import { useShopContext } from "@/app/context/ShopContext";
import Link from "next/link";
import "@/components/CheckoutPageCard/CheckoutPageCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import StoreIcon from "@mui/icons-material/Store";

const CheckoutPageCard = () => {
  const { shopList, setShopList, totalCart, setTotalCart } = useShopContext();

  const addQuantity = (x) => {
    setShopList((prevShopList) =>
      prevShopList.map((e) =>
        e.id === x.id ? { ...e, quantity: e.quantity + 1 } : e
      )
    );
    setTotalCart(totalCart + x.price);
  };

  const removeQuantity = (x) => {
    if (x.quantity > 1)
      setShopList((prevShopList) =>
        prevShopList.map((e) =>
          e.id === x.id ? { ...e, quantity: e.quantity-- } : e
        )
      );
    else
      setShopList((prevShopList) => prevShopList.filter((e) => e.id !== x.id));
    setTotalCart(totalCart - x.price);
  };

  const deleteItem = (x) => {
    setShopList((prevShopList) => prevShopList.filter((e) => e.id !== x.id));
    setTotalCart(totalCart - x.price * x.quantity);
  };

  return (
    <div className="background">
      <div className="return-container">
        <div className="d-flex">
        <StoreIcon className="shop-icn" sx={{ fontSize: 40 }}/>
        <h1>Checkout</h1>
        </div>
        <Link href="/browse">Go back</Link>
      </div>
      <div className="products-container">
        {shopList.map((e) => (
          <div className="card-container" key={e.title}>
            <div className="img-title-container">
              <div>
                <img src={e.image} />
              </div>
              <h1> {e.title} </h1>
            </div>
            <div className="price-cont">
              <div>
                <div className="pq-cont">
                  <p> Price: {e.price.toFixed(2)} $ </p>
                  <p> Quantity: {e.quantity} </p>
                </div>
                <div className="quantity-btn-cont">
                  <button onClick={() => deleteItem(e)} className="delete-product-btn">
                    <DeleteIcon className="delete-icon" sx={{ fontSize: 30 }} />
                  </button>
                  <div className="quantity-btn-container">
                    <button
                      onClick={() => removeQuantity(e)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <button
                      onClick={() => addQuantity(e)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <h2>Product Total: {(e.price * e.quantity).toFixed(2)} $ </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="payment-link-cont">
        <h3>Payment Total: {totalCart.toFixed(2)} $ </h3>
        <Link className="payment-link" href="/payment" >Go to payment</Link>
      </div>
    </div>
  );
};

export default CheckoutPageCard;
