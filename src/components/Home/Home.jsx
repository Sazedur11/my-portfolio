import About from "../About/About";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Story from "../Story/Story";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Details></Details>
        <About></About>
        <Story></Story>
      </div>
    </div>
  );
};

export default Home;
