import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import navImg from "./assets/nav.jpg";


function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${navImg})` }}
      >
        <Navbar></Navbar>
      </div>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
