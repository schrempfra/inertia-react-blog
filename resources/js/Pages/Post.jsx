import React from "react";
import Guests from "../Layouts/Guests";

export default function Post({post}) {
    return (
        <Guests>
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </Guests>
    );
}
