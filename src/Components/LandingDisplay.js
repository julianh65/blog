import React from 'react';
import image from "../images/Ken_Thompson_(sitting)_and_Dennis_Ritchie_at_PDP-11_(2876612463).jpg";
import "./LandingDisplay.css";

function LandingDisplay() {
    return (
        <div class="flex min-h-50%">
            <div class="w-1/2 min-h-full z-10">
                <div class="flex items-center h-full p-20">
                    <h1 class=" text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold leading-none -mr-32 mb-1">Julian's Blog</h1>
                </div>
            </div>
            <div class="w-1/2 min-h-full lg:w-1/2">
                <img class=" max-w-full object-cover ken_img shadow-lg -ml-32" src={image}></img>
            </div>

        </div>
    )

}

export default LandingDisplay;


//    <div class="grid">
// <h1 class="z-10 lg:text-8xl md:text-7xl sm:text-6xl text-5xl color">Julian's Blog</h1>
// <img class=" object-cover ken_img shadow-lg" src={image}></img>
// </div>);