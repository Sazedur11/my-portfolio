const About = () => {
  return (
    <div>
      <style>{`
        .cardd {
          margin: 0 auto;
          padding: 2em;
          width: 300px;
          background: #1c1f2b;
          text-align: center;
          border-radius: 10px;
          position: relative;
          z-index: 0; /* create stacking context */
        }
        .cardd::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: red;
  border-radius: 10px;
  z-index: -1;
}
      `}</style>
      <div className="cardd">
        <h2 className="text-center">hello css</h2>
      </div>
    </div>
  );
};

export default About;