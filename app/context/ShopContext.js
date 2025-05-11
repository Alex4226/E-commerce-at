'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [isShoppingCart, setIsShoppingCart] = useState(true);
  const [shopList, setShopList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Se încarcă userul la pornirea aplicației
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        isShoppingCart,
        setIsShoppingCart,
        shopList,
        setShopList,
        totalCart,
        setTotalCart,
        user,
        setUser
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);