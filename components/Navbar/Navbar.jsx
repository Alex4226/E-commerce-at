"use client";
import "./Navbar.css";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useShopContext } from "@/app/context/ShopContext";

const Navbar = () => {
  const { isShoppingCart, setIsShoppingCart, user, setUser } = useShopContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="nav-bar">
      <Link href="/" className="shop-container">
        <StoreIcon className="shop-icon" />
        <h1 className="nav-title">E-commerce App</h1>
      </Link>
      <div className="button-container">
        <div className="forms-container">
          {user ? (
            <>
              <span className="user-greeting">Salut, {user.username}!</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="login-btn">Login</Link>
              <Link href="/register" className="register-btn">Register</Link>
            </>
          )}
        </div>
        <button
          className="invisible-btn"
          onClick={() => setIsShoppingCart(!isShoppingCart)}
        >
          <ShoppingCartIcon className="shopping-cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
