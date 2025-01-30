import "./CardProduct.css";
import { getRating, getPrice } from "@/utilities/getData";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

const CardProduct = ({
  id,
  image,
  title,
  price,
  rating,
  shopList,
  setShopList,
}) => {
  const addToShoppingCart = (id, image, title, price) => {
    const newItem = {
      id: id,
      image: image ,
      title: title,
      price: price,
      quantity: 1,
    };
    const itemIndex = shopList.findIndex((element) => element.id === id)
    if(itemIndex === -1)
      setShopList( [ ...shopList, newItem ] );
    else
      setShopList((prevShopList) => prevShopList.map((e) => e.id === id ? {...e, quantity: e.quantity++} : e));
  };

  return (
    <div className="card-product">
      <img className="card-image" src={image} alt="image" />
      <hr className="separation-line" />
      <h3 className="card-title">{title}</h3>
      <div className="bottom-card-container">
        <div>
          <p className="card-price">{getPrice(price)}$</p>
          <div className="card-rating">
            <p className="card-rating">{getRating(rating)}</p>
            <StarIcon />
          </div>
        </div>
        <button
          onClick={ () => { addToShoppingCart(id, image, title, price);
            console.log(shopList);
           }}
          className="invisible-button"
        >
          <ShoppingCartIcon sx={{ fontSize: 30 }} className="add-to-cart" />
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
