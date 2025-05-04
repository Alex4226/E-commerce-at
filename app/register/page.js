import Link from "next/link";
import "@/app/register/page.css";
import Navbar from "@/components/Navbar/Navbar";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Register</h2>
          <form>
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />

            <label>Email</label>
            <input type="email" placeholder="Enter email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter password" required />

            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
