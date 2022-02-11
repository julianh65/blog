import React from 'react';
import image from "../images/sample.png";

function PostCard(props) {
    return (
        <div class="max-w-sm bg-black rounded overflow-hidden shadow-lg">
            <img class="w-full" src={image} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    )
}

export default PostCard;
