"use client";
import Link from "next/link";
import "@/app/register/page.css";
import Navbar from "@/components/Navbar/Navbar";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();  
    try {
      const res = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });
      setMessage(res.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setMessage("");

    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("Emailul este deja înregistrat.");
      } else {
        setMessage("Eroare la înregistrare.");
      }
    }
  };
  return (
    <>
      <Navbar />
      <ShoppingCart />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            {message.length > 0 ? (<p>Numele, emailul sau parola sunt deja folosite</p>) : null}
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
