import Marquee from "react-fast-marquee";
import html from '../../assets/logo/html5.png'
import css from '../../assets/logo/css3.png'
import tailwind from '../../assets/logo/tailwind-css.png'
import bootstrap from '../../assets/logo/bootstrap.png'
import materialui from '../../assets/logo/material-ui.png'
import js from '../../assets/logo/js.png'
import react from '../../assets/logo/react.png'
import reactRouter from '../../assets/logo/react-router.png'
import nodejs from '../../assets/logo/nodejs.png'
import expressjs from '../../assets/logo/expressjs.png'
import mongodb from '../../assets/logo/mongodb.png'
import firebase from '../../assets/logo/firebase.png'

const Logo = () => {
    return (
        <div className="md:max-w-6xl mx-auto">
            <Marquee direction="right" pauseOnHover="true" gradient="1000" gradientColor="#770D2D"  className="mb-4" >
                <img className="w-20 h-15 mx-4" src={html} alt="" />
                <img className="w-20 h-15 mx-4" src={css} alt="" />
                <img className="w-20 h-15 mx-4" src={tailwind} alt="" />
                <img className="w-20 h-15 mx-4" src={bootstrap} alt="" />
                <img className="w-20 h-15 mx-4" src={materialui} alt="" />
                <img className="w-20 h-15 mx-4" src={js} alt="" />
                <img className="w-20 h-15 mx-4" src={react} alt="" />
                <img className="w-20 h-15 mx-4" src={reactRouter} alt="" />
                <img className="w-20 h-15 mx-4" src={nodejs} alt="" />
                <img className="w-20 h-15 mx-4" src={expressjs} alt="" />
                <img className="w-20 h-15 mx-4" src={firebase} alt="" />
                <img className="w-20 h-15 mx-4" src={mongodb} alt="" />
            </Marquee>
            <Marquee direction="left" pauseOnHover="true" gradient="1000" gradientColor="#770D2D" >
                <img className="w-20 h-15 mx-4" src={html} alt="" />
                <img className="w-20 h-15 mx-4" src={css} alt="" />
                <img className="w-20 h-15 mx-4" src={tailwind} alt="" />
                <img className="w-20 h-15 mx-4" src={bootstrap} alt="" />
                <img className="w-20 h-15 mx-4" src={materialui} alt="" />
                <img className="w-20 h-15 mx-4" src={js} alt="" />
                <img className="w-20 h-15 mx-4" src={react} alt="" />
                <img className="w-20 h-15 mx-4" src={reactRouter} alt="" />
                <img className="w-20 h-15 mx-4" src={nodejs} alt="" />
                <img className="w-20 h-15 mx-4" src={expressjs} alt="" />
                <img className="w-20 h-15 mx-4" src={firebase} alt="" />
                <img className="w-20 h-15 mx-4" src={mongodb} alt="" />
            </Marquee>
        </div>
    );
};

export default Logo;