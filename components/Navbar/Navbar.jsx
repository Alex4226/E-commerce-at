'use client';
import "./Navbar.css";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

const Navbar = ({ isShoppingCart, setIsShoppingCart }) => {
  return (
    <div className="nav-bar">
      <Link href="/" className="shop-container">
        <StoreIcon className="shop-icon" />
        <h1 className="nav-title">Aprozar gen</h1>
      </Link>
      <div className="button-container">
        <div className="forms-container">
          <Link href="/login" className="login-btn">
            Login
          </Link>
          <Link href="/register" className="register-btn">
            Register
          </Link>
        </div>
        <button className="invisible-btn" onClick={() => setIsShoppingCart(!isShoppingCart)}>
          <ShoppingCartIcon className="shopping-cart-icon"></ShoppingCartIcon>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
