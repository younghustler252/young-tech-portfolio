"use client"

import { useState } from "react";

type CardPops = {
    title: string;
    desc: string;
}

export default function Card({title, desc}:CardPops) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="p-4 border rounded shadow-lg">
            <div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700">{desc}</p>
                <button
                className="mt-3 px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => setLiked(!liked)}
                >
                    {liked ? "Liked 💙" : "Like"}
                </button>
            </div>
        </div>
    )
}