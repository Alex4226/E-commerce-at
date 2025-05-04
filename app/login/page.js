import Link from "next/link";
import "@/app/login/page.css";
import Navbar from "@/components/Navbar/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Login</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter password" required />

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
