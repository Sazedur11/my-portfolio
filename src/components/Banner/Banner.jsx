import sazedur from "../../assets/sr.png";

const Banner = () => {
  return (
    
    <div className="hero py-12 md:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" bg-linear-65 from-themeColor to-themeColor2-200 rounded-full">
          <img
            className="w-110 h-auto rounded-full grayscale-25"
            src={sazedur}
            alt="Sazedur"
          />
        </div>
        <div>
          <h2 className="font-rajdhani text-2xl font-bold text-white my-4">
            Hello
          </h2>
          <h1 className="font-rajdhani text-5xl font-bold text-white">
            I'm Sazedur Rahman a <br /> professional front end develper.
          </h1>
          <p className="text-gray-400 font-rubik text-xl my-8">
            Specializing in creating modern, responsive, and user-friendly{" "}
            <br /> web applications. I love turning ideas into reality with
            code.
          </p>
          <button className="text-white bg-themeColor font-rubik font-bold px-6 py-4 rounded-full">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
