import { useEffect, useRef } from "react";
import sazedur from "../../assets/sr.png";
import bannerImg from '../../assets/banner.jpg'
import { gsap } from "gsap";
import '../Banner/Banner.css'


const Banner = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const words = h1Ref.current.textContent.split(" ");
    h1Ref.current.innerHTML = words
      .map((word) => `<span class="inline-block mr-1">${word}</span>`)
      .join(" ");

    gsap.from(h1Ref.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="hero py-12 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url(${bannerImg})`}}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="imgBox bg-linear-65 from-themeColor to-themeColor2-200 rounded-full">
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
          <h1
            ref={h1Ref}
            className="font-rajdhani text-5xl font-bold text-white inline-block max-w-xl"
          >
            I'm Sazedur Rahman a <br /> professional front end developer.
          </h1>
          <p className="text-gray-400 font-rubik text-xl my-8">
            Specializing in creating modern, responsive, and user-friendly <br /> web applications. I love turning ideas into reality with
            code.
          </p>
          <button className="text-white bg-themeColor font-rubik font-bold px-6 py-4 rounded-full border-2 border-themeColor hover:bg-base-100">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
