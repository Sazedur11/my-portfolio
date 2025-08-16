import './Story.css'

const Story = () => {
  return (
    <div className="md:flex justify-between items-center gap-8 md:max-w-6xl mx-auto px-4 my-20">
      <div className="bg-gradient-to-tl from-[#770D2D] to-[#221317] py-10 px-6 rounded-2xl w-1/2">
        <div className="flex gap-12 justify-center items-center">
          <h2 className="text-themeColor text-9xl font-bold">4</h2>
          <h3 className="font-rajdhani text-5xl font-bold">
            Years Of <br /> My Journey
          </h3>
        </div>
        <p>
          My journey began when It was 2021, when I learnt about the existence
          of basic HTML, CSS & fully WordPress theme customization. And I have
          extensive experience completing multiple projects with WordPress. It
          fascinated me that I could use DevTools to go into any website's code
          and see how it was written. After that, I made a choice to go into the
          web development industry - and never looked back.
        </p>
      </div>
      <div className="w-1/2 grid grid-cols-2 gap-8">
        <div className="box bg-[#141414] p-8 rounded-xl">
          <div className="innerBoxContent">
            <h2 className="text-7xl text-center font-rajdhani font-bold">4</h2>
            <p className="text-center text-gray-400 font-semibold">
              Years Exprience
            </p>
          </div>
        </div>
        <div className="box bg-[#141414] p-8 rounded-xl">
          <div className="innerBoxContent">
            <h2 className="text-7xl text-center font-rajdhani font-bold">15</h2>
            <p className="text-center text-gray-400 font-semibold">
              Project Done
            </p>
          </div>
        </div>
        <div className="box bg-[#141414] p-8 rounded-xl">
          <div className="innerBoxContent">
            <h2 className="text-7xl text-center font-rajdhani font-bold">12</h2>
            <p className="text-center text-gray-400 font-semibold">
              Technical Skills
            </p>
          </div>
        </div>
        <div className="box bg-[#141414] p-8 rounded-xl">
          <div className="innerBoxContent">
            <h2 className="text-7xl text-center font-rajdhani font-bold">35+</h2>
            <p className="text-center text-gray-400 font-semibold">
              Problem Solved
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Story;
