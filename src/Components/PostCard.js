import React from 'react';
import image from "../images/sample.png";

function PostCard(props) {
    return (
        <div class="w-full px-5 md:w-1/2 lg:w-1/3 xl:w-1/4 overflow-hidden p-12">
            <img class="w-full rounded" src={image} />
            <div class="px-6 py-4 text-center">
                <div class="font-bold text-xl mb-2">{props.title}</div>
            </div>
        </div>
    )
}

export default PostCard;
