import React from "react";
import Guests from "../Layouts/Guests";
import { Link } from "@inertiajs/react";

export default function Posts({ posts }) {
    return (
        <Guests>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Guests>
    );
}
