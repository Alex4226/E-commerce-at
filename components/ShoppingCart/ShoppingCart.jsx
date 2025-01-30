import "./ShoppingCart.css";
import { getPrice } from "@/utilities/getData";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = ({
  isShoppingCart,
  setIsShoppingCart,
  shopList,
  setShopList,
}) => {

  const addQuantity = (x) => setShopList((prevShopList) => prevShopList.map((e) => e.id === x.id ? {...e, quantity: e.quantity++} : e));

  const removeQuantity = (x) => {
    if(x.quantity > 1)
      setShopList((prevShopList) => prevShopList.map((e) => e.id === x.id ? {...e, quantity: e.quantity--} : e));
    else
      setShopList((prevShopList) => prevShopList.filter((e) => e.id !== x.id ));
  }

  const deleteItem = (x) => setShopList((prevShopList) => prevShopList.filter((e) => e.id !== x.id ));

  return (
    <div>
      <div
        onClick={() => setIsShoppingCart(true)}
        className={`overlay ${isShoppingCart ? "" : "overlay-on"}`}
      ></div>
      <div className={`cart-container ${isShoppingCart ? "" : "cart-open"}`}>
        <h1 className="cart-title">My list</h1>
        <div className="list-container">
          {shopList.map((e) => (
            <div className="list-item" key={e.title}>
              <div className="title-img-container">
                <div className="img-back">
                  <img
                    className="cart-image"
                    src={e.image}
                    alt="product-image"
                  />
                </div>
                <h1 className="cart-prod-title"> {e.title} </h1>
              </div>
              <div className="cart-price-container">
                <p className="cart-price"> Price:   {getPrice(e.price)} $ </p>
                <p className="cart-quantity"> Quantity:   {e.quantity} </p>
                <p className="cart-product-total"> Total:  {getPrice(e.quantity * e.price)} $ </p>
              </div>
              <div className="cart-btn-container">
                <button onClick={() => deleteItem(e)} className="delete-btn">
                  <DeleteIcon className="delete-icn" />
                </button>
                <div className="quantity-btn-container">
                  <button onClick={() => removeQuantity(e)} className="quantity-btn"> - </button>
                  <button onClick={() => addQuantity(e)} className="quantity-btn"> + </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
