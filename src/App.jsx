import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import bannerImg from "./assets/banner.jpg";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
