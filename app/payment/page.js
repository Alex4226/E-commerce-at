"use client";

import React, { useState } from "react";
import "@/app/payment/page.css";
import { useShopContext } from "../context/ShopContext";
import PaymentCard from "@/components/PaymentCard/PaymentCard";
import AddressCard from "@/components/AddressCard/AddressCard";
import Link from "next/link";

const PaymentPage = () => {
  const { totalCart } = useShopContext();

  const [addressData, setAddressData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardholder: "",
    cardnumber: "",
    expiry: "",
    cvv: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📦 Address Info:", addressData);
    console.log("💳 Payment Info:", paymentData);
    alert("Order submitted!");
  };

  return (
    <div className="pay-page-cont">
      <div className="pay-nav">
        <Link href="/checkout">Go back to cart</Link>
        <h1>Payment Total: {totalCart.toFixed(2)} $ </h1>
        <Link href="/browse">Go browse</Link>
      </div>
      <form onSubmit={handleSubmit} className="pay-form">
        <AddressCard data={addressData} onChange={handleAddressChange} />
        <div>
          <PaymentCard data={paymentData} onChange={handlePaymentChange} />
          <div className="container">
            <button className="button" type="submit">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
