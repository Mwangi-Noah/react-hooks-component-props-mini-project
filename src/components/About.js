import React from "react";
import blogData from "../data/blog";

function About({
    title, 
    about, 
    imageSrc = "https://via.placeholder.com/215"}){
    return(
        <aside>
        <img src={imageSrc} alt="blog logo" />
        <p>{about.text}</p>
        </aside>
    )
    
}