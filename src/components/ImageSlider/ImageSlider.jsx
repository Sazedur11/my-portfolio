import "./ImageSlider.css";
import img1 from "../../assets/slider-images/web developer.jpeg";
import img2 from "../../assets/slider-images/ChatGPT Image Jul 30, 2025, 12_51_29 AM.png";
import img3 from "../../assets/slider-images/dashboard.jpeg";
import img4 from "../../assets/slider-images/fron-end-developer.jpeg";
import img5 from "../../assets/slider-images/Screenshot.png";
import CircuitBoard from "../AnimationLayouts/CircuitBoard";

const ImageSlider = () => {
  return (
    <CircuitBoard>
      <div className="imageContainer py-25">
        <div className="imageItem">
          <img src={img1} alt="" />
        </div>
        <div className="imageItem">
          <img src={img2} alt="" />
        </div>
        <div className="imageItem">
          <img src={img1} alt="" />
        </div>
        <div className="imageItem">
          <img src={img2} alt="" />
        </div>
        <div className="imageItem">
          <img src={img3} alt="" />
        </div>
        <div className="imageItem">
          <img src={img5} alt="" />
        </div>
        <div className="imageItem">
          <img src={img4} alt="" />
        </div>
      </div>
    </CircuitBoard>
  );
};

export default ImageSlider;
