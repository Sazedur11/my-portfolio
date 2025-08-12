import aboutImg from "../../assets/about.webm";
// import Marquee from "react-fast-marquee";


const About = () => {
  return (
    <div className="md:flex items-center gap-4 md:max-w-6xl mx-auto px-4 my-20">
      <div className="md:w-1/2">
        <h2 className="font-rajdhani text-4xl font-bold my-4 bg-gradient-to-r from-themeColor via-pink-600 to-purple-600 bg-clip-text text-transparent">About Me about me</h2>
        
        <p className="text-xl">
          I’m Sazedur Rahman, a <span className="bg-gradient-to-r from-themeColor via-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">Front End Developer</span> from Bangladesh with a
          passion for creating beautiful and functional websites and web
          applications. I have a strong interest in <span className="bg-gradient-to-r from-themeColor via-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">JavaScript and React</span> (which
          I used to build this website) and I’m <span className="underline decoration-themeColor">constantly expanding my skills</span>.
          While many of my projects are full-stack, I've been focusing more on
          frontend development lately, as I love experimenting with CSS and
          bringing creative designs to life
        </p>
      </div>
      <div className="md:w-1/2">
        <video src={aboutImg}></video>
      </div>
    </div>
    
  );
};

export default About;
