import React from "react";
import './app-header.scss'
export default function AppHeader({liked,allPosts}) {
    return(
        <div className="app-header d-flex">
            <h1>Your Profile</h1>
            <h2>{allPosts} records, some of them have been liked {liked}</h2>
        </div>
    )
}