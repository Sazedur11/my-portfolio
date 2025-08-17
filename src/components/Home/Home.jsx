import About from "../About/About";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import ImageSlider from "../ImageSlider/ImageSlider";
import Logo from "../Logo/Logo";
import Story from "../Story/Story";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Details></Details>
        <About></About>
        <Logo></Logo>
        <Story></Story>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
};

export default Home;
