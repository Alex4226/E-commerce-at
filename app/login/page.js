"use client";
import Link from "next/link";
import "@/app/login/page.css";
import Navbar from "@/components/Navbar/Navbar";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useShopContext } from "@/app/context/ShopContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useShopContext(); // preluăm din context
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (res.data && res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user); // ← AICI este cheia
        router.push("/browse"); // redirecționează spre homepage
      } else {
        alert("Login eșuat. Verifică datele.");
      }
    } catch (error) {
      console.error("Eroare login:", error);
      alert("Eroare la conectare.");
    }
  };

  return (
    <>
      <Navbar />
      <ShoppingCart />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
