import Link from "next/link";
import "@/app/App.css";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-container">
        <h1>Aprozar</h1>
        <Link href="/browse" className="browse-link">Browse</Link>
      </div>
    </div>
  );
};

export default MainPage;
