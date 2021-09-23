import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div className="easter-egg-blueberry">
            <div className = "navigation">
                <Link to="/portfolio">
                    Home Page
                </Link>
            </div>
            <div className="inner-blueberry">
                Blueberry
                <div >
                the div within the div
                </div>
                <div className = "the-other-div-within-the-div">
                    big pog
                </div>
                <div className = "the-other-div-within-the-div">
                    lmao you can't touch this
                </div>
                <div>
                lol
                </div>
                noice
                <div className = "img-smol-pupper">
                </div>
             </div>
         </div>
    );
};

export default EasterEgg;