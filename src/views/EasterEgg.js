import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div class ="easter-egg-blueberry">
            <div class = "navigation">
                <Link to="/portfolio">
                    Home Page
                </Link>
            </div>
            <div class="inner-blueberry">
                Blueberry
                <div >
                the div within the div
                </div>
                <div class = "the-other-div-within-the-div">
                    big pog
                </div>
                <div class = "the-other-div-within-the-div">
                    lmao you can't touch this
                </div>
                <div>
                lol
                </div>
                noice
                <div class = "img-smol-pupper">
                </div>
             </div>
         </div>
    );
};

export default EasterEgg;